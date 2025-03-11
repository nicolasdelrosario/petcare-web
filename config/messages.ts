export const messages = {
	form: {
		labels: {
			email: "Correo electrónico",
			password: "Contraseña",
			name: "Nombre",
			phone: "Teléfono",
		},
		placeholders: {
			email: "email@petcare.com",
			password: "********",
		},
		buttons: {
			signIn: "Iniciar sesión",
			submit: "Enviar",
			loading: "Cargando...",
		},
	},
	errors: {
		auth: {
			invalidCredentials: "Credenciales inválidas",
			invalidEmail: "Correo electrónico no válido",
			invalidPassword: "La contraseña debe tener al menos 6 caracteres",
		},
	},
	success: {
		auth: {
			welcome: "¡Bienvenido!",
			signOut: "Sesión cerrada correctamente",
		},
	},
} as const;
