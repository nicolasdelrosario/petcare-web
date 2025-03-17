import { messages } from "@/config/messages";
import { z } from "zod";
import { workspaceSchema } from "./workspace";

const phoneRegex = /^\+?[0-9]{8,15}$/;

export const userSchema = z.object({
	id: z.number(),
	name: z.string().min(3, messages.errors.users.invalidName),
	email: z.string().email(messages.errors.users.invalidEmail),
	password: z.string().min(6, messages.errors.users.invalidPassword),
	workspaceId: z.number({
		required_error: messages.errors.users.invalidWorkspace,
		invalid_type_error: messages.errors.users.invalidWorkspaceId,
	}),
	phone: z
		.string()
		.nullable()
		.optional()
		.refine((val) => !val || phoneRegex.test(val), {
			message: messages.errors.users.invalidPhone,
		}),
	role: z
		.enum(["admin", "vet", "receptionist", "owner"], {
			errorMap: () => ({ message: messages.errors.users.invalidRole }),
		})
		.default("receptionist"),
	createdAt: z.string(),
	updatedAt: z.string(),
	isActive: z.boolean().optional().default(true),
});

export const selectUserSchema = userSchema.pick({
	id: true,
	name: true,
	email: true,
	phone: true,
	role: true,
	workspaceId: true,
});

export const createUserSchema = userSchema.pick({
	name: true,
	email: true,
	phone: true,
	password: true,
	role: true,
	workspaceId: true,
});

export const patchUserSchema = createUserSchema.partial();

export const userWithWorkspaceSchema = userSchema.extend({
	workspace: workspaceSchema,
});

export type UserSchema = z.infer<typeof userSchema>;
export type SelectUserSchema = z.infer<typeof selectUserSchema>;
export type CreateUserSchema = z.infer<typeof createUserSchema>;
export type PatchUserSchema = z.infer<typeof patchUserSchema>;
export type UserWithWorkspaceSchema = z.infer<typeof userWithWorkspaceSchema>;
