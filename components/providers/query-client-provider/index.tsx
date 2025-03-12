"use client";

import {
	QueryClient,
	QueryClientProvider as ReactQueryClientProvider,
} from "@tanstack/react-query";

type QueryClientProps = {
	children: React.ReactNode;
};

function QueryClientProvider({ children }: QueryClientProps) {
	const queryClient = new QueryClient();

	return (
		<ReactQueryClientProvider client={queryClient}>
			{children}
		</ReactQueryClientProvider>
	);
}

export default QueryClientProvider;
