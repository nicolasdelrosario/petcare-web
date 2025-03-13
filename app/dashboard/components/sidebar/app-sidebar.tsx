"use client";

import type * as React from "react";

import NavUser from "@/app/dashboard/components/sidebar/components/nav-user";
import NavUserPending from "@/app/dashboard/components/sidebar/components/nav-user/pending";
import Team from "@/app/dashboard/components/sidebar/components/team";
import TeamPending from "@/app/dashboard/components/sidebar/components/team/pending";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarRail,
} from "@/components/ui/sidebar";
import { useAuth } from "@/hooks/use-auth";

function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	const { getMe } = useAuth();
	const { data: user, isPending } = getMe;

	return (
		<Sidebar collapsible="icon" {...props}>
			<SidebarHeader>
				{user && <Team workspace={user.workspace} role={user.role} />}
				{isPending && <TeamPending />}
			</SidebarHeader>
			<SidebarContent>
				<div>content</div>
			</SidebarContent>
			<SidebarFooter>
				{user && <NavUser user={user} />}
				{isPending && <NavUserPending />}
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	);
}

export default AppSidebar;
