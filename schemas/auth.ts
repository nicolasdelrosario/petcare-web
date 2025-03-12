import { messages } from "@/config/messages";
import { z } from "zod";

export const signInSchema = z.object({
	email: z.string().email(messages.errors.auth.invalidEmail),
	password: z.string().min(6, messages.errors.auth.invalidPassword),
});

export type SignInSchema = z.infer<typeof signInSchema>;
