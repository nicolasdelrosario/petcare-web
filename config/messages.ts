export const messages = {
	form: {
		labels: {
			user: {
				name: "Nombre",
				email: "Correo electrónica",
				password: "Contraseña",
				phone: "Teléfono",
				role: "Rol",
			},
		},
		placeholders: {
			user: {
				name: "Your Name",
				email: "email@petcare.com",
				password: "********",
				phone: "51123456789",
				role: "receptionist",
			},
		},
		buttons: {
			create: "Nuevo",
			loading: "Cargando...",
			signIn: "Iniciar sesión",
			submit: "Enviar",
		},
	},
	errors: {
		auth: {
			invalidCredentials: "Credenciales inválidas",
			invalidEmail: "Correo electrónico no válido",
			invalidPassword: "La contraseña debe tener al menos 6 caracteres",
		},
		users: {
			invalidName: "El nombre debe tener al menos 3 caracteres",
			invalidEmail: "Correo electrónico no válido",
			invalidPassword: "La contraseña debe tener al menos 6 caracteres",
			invalidWorkspace: "El espacio de trabajo es requerido",
			invalidWorkspaceId: "El ID del espacio de trabajo no es válido",
			invalidPhone: "El número de teléfono no es válido",
			invalidRole: "Rol inválido",
		},
		workspaces: {
			invalidName: "El nombre debe tener al menos 3 caracteres",
			invalidSlug: "El slug debe tener al menos 3 caracteres",
			descriptionTooShort: "La descripción debe tener al menos 10 caracteres",
			descriptionTooLong: "La descripción debe tener menos de 500 caracteres",
		},
	},
	success: {
		auth: {
			welcome: "¡Bienvenido!",
			signOut: "Sesión cerrada correctamente",
		},
	},
} as const;
