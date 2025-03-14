import { apiRoutes } from "@/config/api";
import type { UserSchema } from "@/schemas/user";
import { api } from "@/services/api";

export const userService = {
	async list() {
		const { data } = await api.get(apiRoutes.users.list);

		return data as UserSchema[];
	},

	async getOne(id: number) {
		const { data } = await api.get(apiRoutes.users.getOne(id));

		return data as UserSchema;
	},
};
