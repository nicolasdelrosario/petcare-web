import QueryClientProvider from "@/components/providers/query-client-provider";
import ReactScan from "@/components/providers/react-scan";
import { Toaster } from "@/components/ui/sonner";
import { env } from "@/config/env";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "./theme-provider";

type ProvidersProps = {
	children: React.ReactNode;
};

function Providers({ children }: ProvidersProps) {
	return (
		<>
			<QueryClientProvider>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{env.NODE_ENV === "development" && (
						<>
							<ReactQueryDevtools />
							<ReactScan />
						</>
					)}
					<Toaster />
					{children}
				</ThemeProvider>
			</QueryClientProvider>
		</>
	);
}

export default Providers;
