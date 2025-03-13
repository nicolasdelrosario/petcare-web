import { messages } from "@/config/messages";
import { z } from "zod";

export const workspaceSchema = z.object({
	id: z.number(),
	name: z.string().min(3, messages.errors.workspaces.invalidName),
	slug: z.string().min(3, messages.errors.workspaces.invalidSlug),
	description: z
		.string()
		.min(10, messages.errors.workspaces.descriptionTooShort)
		.max(500, messages.errors.workspaces.descriptionTooLong)
		.nullable()
		.optional(),
	location: z.string().nullable().optional(),
	createdAt: z.string(),
	updatedAt: z.string(),
	isActive: z.boolean().default(true),
});

export type WorkspaceSchema = z.infer<typeof workspaceSchema>;
