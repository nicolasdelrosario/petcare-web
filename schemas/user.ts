import { messages } from "@/config/messages";
import { z } from "zod";
import { workspaceSchema } from "./workspace";

export const userSchema = z.object({
	id: z.number(),
	name: z.string().min(3, messages.errors.users.invalidName),
	email: z.string().email(messages.errors.users.invalidEmail),
	workspaceId: z.number({
		required_error: messages.errors.users.invalidWorkspace,
		invalid_type_error: messages.errors.users.invalidWorkspaceId,
	}),
	phone: z
		.string()
		.nullable()
		.optional()
		.refine((val) => !val || /^\+?[0-9]{8,15}$/.test(val), {
			message: messages.errors.users.invalidPhone,
		}),
	role: z
		.enum(["admin", "vet", "receptionist", "owner"], {
			errorMap: () => ({ message: messages.errors.users.invalidRole }),
		})
		.default("receptionist"),
	createdAt: z.string(),
	updatedAt: z.string(),
	isActive: z.boolean().default(true),
});

export type UserSchema = z.infer<typeof userSchema>;

export const userWithWorkspaceSchema = userSchema.extend({
	workspace: workspaceSchema,
});

export type UserWithWorkspaceSchema = z.infer<typeof userWithWorkspaceSchema>;
