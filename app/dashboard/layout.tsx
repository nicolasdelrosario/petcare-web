import AppSidebar from "@/app/dashboard/components/sidebar/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

type LayoutProps = {
	children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
	return (
		<SidebarProvider>
			<AppSidebar />
			<SidebarInset>{children}</SidebarInset>
		</SidebarProvider>
	);
}

export default Layout;
