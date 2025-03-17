import { apiRoutes } from "@/config/api";
import type {
	CreateUserSchema,
	PatchUserSchema,
	SelectUserSchema,
} from "@/schemas/user";
import { api } from "@/services/api";

export const userService = {
	async list() {
		const { data } = await api.get(apiRoutes.users.list);

		return data as SelectUserSchema[];
	},

	async getOne(id: number) {
		const { data } = await api.get(apiRoutes.users.getOne(id));

		return data as SelectUserSchema;
	},

	async create(user: CreateUserSchema) {
		const { data } = await api.post(apiRoutes.users.create, user);

		return data as CreateUserSchema;
	},

	async patch(id: number, user: PatchUserSchema) {
		const { data } = await api.patch(apiRoutes.users.patch(id), user);

		return data as PatchUserSchema;
	},
};
