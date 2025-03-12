import type { SignInSchema } from "@/schemas/auth";
import { authService } from "@/services/auth";
import { useMutation } from "@tanstack/react-query";

export function useAuth() {
	const signIn = useMutation({
		mutationFn: (credentials: SignInSchema) => authService.signIn(credentials),
	});

	const signOut = useMutation({
		mutationFn: () => authService.signOut(),
	});

	return { signIn, signOut };
}
