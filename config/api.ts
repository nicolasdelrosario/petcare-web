export const apiRoutes = {
	auth: {
		signIn: "/login",
		signOut: "/logout",
	},
	owners: {
		list: "/owners",
		create: "/owners",
		getById: (id: string) => `/owners/${id}`,
		update: (id: string) => `/owners/${id}`,
		delete: (id: string) => `/owners/${id}`,
	},
} as const;
