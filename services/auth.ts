import { apiRoutes } from "@/config/api";
import type { SignInSchema } from "@/schemas/auth";
import { api } from "@/services/api";

export const authService = {
	async signIn(credentials: SignInSchema) {
		const { data } = await api.post(apiRoutes.auth.signIn, credentials);
		return data;
	},

	async signOut() {
		const { data } = await api.post(apiRoutes.auth.signOut);
		return data;
	},
};
