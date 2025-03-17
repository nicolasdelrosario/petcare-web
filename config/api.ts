export const apiRoutes = {
	auth: {
		signIn: "/login",
		signOut: "/logout",
		getMe: "/me",
	},
	owners: {
		list: "/owners",
		create: "/owners",
		getOne: (id: number) => `/owners/${id}`,
		patch: (id: number) => `/owners/${id}`,
		delete: (id: number) => `/owners/${id}`,
	},
	users: {
		list: "/users",
		create: "/users",
		getOne: (id: number) => `/users/${id}`,
		patch: (id: number) => `/users/${id}`,
		delete: (id: number) => `/users/${id}`,
	},
} as const;
