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
			root: "/dashboard",
			home: "/dashboard/inicio",
		},
	},
} as const;
