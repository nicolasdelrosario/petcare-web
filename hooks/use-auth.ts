import type { SignInSchema } from "@/schemas/auth";
import { authService } from "@/services/auth";
import { useMutation, useQuery } from "@tanstack/react-query";

export function useAuth() {
	const signIn = useMutation({
		mutationFn: (credentials: SignInSchema) => authService.signIn(credentials),
	});

	const signOut = useMutation({
		mutationFn: () => authService.signOut(),
	});

	const getMe = useQuery({
		queryKey: ["me"],
		queryFn: () => authService.getMe(),
		retry: false,
	});

	return { signIn, signOut, getMe };
}
