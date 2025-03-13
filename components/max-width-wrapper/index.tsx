import { cn } from "@/lib/utils";

type MaxWidthWrapperProps = {
	className?: string;
	children: React.ReactNode;
};

function MaxWidthWrapper({ className, children }: MaxWidthWrapperProps) {
	return (
		<div
			className={cn(
				"mx-auto flex h-full w-full max-w-screen-xl flex-1 flex-col px-4 sm:px-6 lg:px-8 ",
				className,
			)}
		>
			{children}
		</div>
	);
}

export default MaxWidthWrapper;
