import { routes } from "@/config/routes";
import { LifeBuoy, Send, Settings2, SquareTerminal } from "lucide-react";

export const navigation = {
	main: [
		{
			title: "Dashboard",
			url: routes.private.dashboard.home.path,
			icon: SquareTerminal,
			items: routes.private.dashboard.home.items.map((item) => ({
				title: item.title,
				url: item.path,
			})),
			isActive: true,
		},
		{
			title: "Configuración",
			url: routes.private.dashboard.settings.path,
			icon: Settings2,
			items: routes.private.dashboard.settings.items.map((item) => ({
				title: item.title,
				url: item.path,
			})),
		},
	],
	secondary: [
		{
			title: "Soporte",
			icon: LifeBuoy,
		},
		{
			title: "Dejanos tu opinión",
			icon: Send,
		},
	],
} as const;
