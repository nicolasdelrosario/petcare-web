import { userService } from "@/services/users";
import { useQuery } from "@tanstack/react-query";

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

	return { list, getOne };
}
