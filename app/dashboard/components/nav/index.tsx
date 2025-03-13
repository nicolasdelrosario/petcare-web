import { ThemeToggle } from "@/components/theme-toggle";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import { Fragment, useMemo } from "react";

interface BreadcrumbItemType {
	label: string;
	href?: string;
	isCurrentPage?: boolean;
	icon?: LucideIcon;
}

interface HeaderProps {
	breadcrumbItems?: BreadcrumbItemType[];
	className?: string;
	onSidebarToggle?: () => void;
	showModeToggle?: boolean;
	rightContent?: React.ReactNode;
	title?: string;
}

export default function HeaderPage({
	breadcrumbItems = [],
	className = "",
	onSidebarToggle,
	showModeToggle = true,
	rightContent,
	title = "Título",
}: HeaderProps) {
	const breadcrumbList = useMemo(
		() => (
			<BreadcrumbList>
				{breadcrumbItems.map((item, index) => (
					<Fragment key={item.label}>
						<BreadcrumbItem
							className={cn(
								index === 0 ? "block" : "",
								"transition-colors hover:text-primary",
							)}
						>
							<div className="flex items-center gap-1">
								{item.icon && <item.icon className="size-4" />}
								{item.isCurrentPage ? (
									<BreadcrumbPage>{item.label}</BreadcrumbPage>
								) : (
									<BreadcrumbLink href={item.href || "#"}>
										{item.label}
									</BreadcrumbLink>
								)}
							</div>
						</BreadcrumbItem>
						{index < breadcrumbItems.length - 1 && (
							<BreadcrumbSeparator className="hidden md:block" />
						)}
					</Fragment>
				))}
			</BreadcrumbList>
		),
		[breadcrumbItems],
	);

	return (
		<header
			className={cn(
				"mr-4 flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12",
				"bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
				className,
			)}
			aria-label="Page header"
		>
			<h1 className="sr-only" id="page-title">
				{title}
			</h1>

			<div className="flex items-center gap-2 px-4">
				<SidebarTrigger
					className="-ml-1"
					onClick={onSidebarToggle}
					aria-label="Toggle sidebar"
				/>
				<Separator className="min-h-4" orientation="vertical" />
				{breadcrumbItems.length > 0 && (
					<nav aria-label="Breadcrumb">
						<Breadcrumb>{breadcrumbList}</Breadcrumb>
					</nav>
				)}
			</div>

			<div className="flex items-center gap-4 px-4">
				{rightContent}
				{showModeToggle && <ThemeToggle />}
			</div>
		</header>
	);
}
