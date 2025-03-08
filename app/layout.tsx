import { Poppins } from "next/font/google";

import "./globals.css";
import Providers from "@/components/providers";
import { cn } from "@/lib/utils";
import { constructMetadata } from "@/utils/construct-metadata";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	display: "swap",
});

export const metadata = constructMetadata({});

type Props = {
	children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
	return (
		<html lang="es" suppressHydrationWarning>
			<body
				className={cn(
					"min-h-screen min-w-screen antialiased",
					poppins.className,
				)}
			>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
