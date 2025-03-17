import type { CreateUserSchema, PatchUserSchema } from "@/schemas/user";
import { userService } from "@/services/users";
import { useMutation, useQuery } from "@tanstack/react-query";

export function useUsers(id?: string) {
	const list = useQuery({
		queryKey: ["users"],
		queryFn: () => userService.list(),
	});

	const getOne = useQuery({
		queryKey: ["user", id],
		queryFn: () => userService.getOne(Number(id)),
		enabled: !!id && !Number.isNaN(Number(id)),
		retry: false,
	});

	const create = useMutation({
		mutationFn: (user: CreateUserSchema) => userService.create(user),
	});

	const patch = useMutation({
		mutationFn: (user: PatchUserSchema) => userService.patch(Number(id), user),
	});

	return { list, getOne, create, patch };
}
