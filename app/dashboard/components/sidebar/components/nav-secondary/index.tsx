import type { LucideIcon } from "lucide-react";
import type * as React from "react";

import {
	SidebarGroup,
	SidebarGroupContent,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";

type NavSecondaryItem = {
	title: string;
	icon: LucideIcon;
};

type NavSecondaryProps = {
	items: readonly NavSecondaryItem[];
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>;

function NavSecondary({ items, ...props }: NavSecondaryProps) {
	return (
		<SidebarGroup {...props}>
			<SidebarGroupContent>
				<SidebarMenu>
					{items.map((item) => (
						<SidebarMenuItem key={item.title}>
							<SidebarMenuButton size="sm">
								{item.icon && <item.icon />}
								<span>{item.title}</span>
							</SidebarMenuButton>
						</SidebarMenuItem>
					))}
				</SidebarMenu>
			</SidebarGroupContent>
		</SidebarGroup>
	);
}

export default NavSecondary;
