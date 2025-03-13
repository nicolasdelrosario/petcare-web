export const routes = {
	public: {
		home: "/",
		auth: {
			signIn: "/iniciar-sesion",
			signUp: "/registro",
		},
	},
	private: {
		dashboard: {
			root: {
				path: "/dashboard",
				title: "Dashboard",
			},
			home: {
				path: "/dashboard/inicio",
				title: "Inicio",
			},
		},
	},
} as const;
