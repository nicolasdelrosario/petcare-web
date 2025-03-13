export const roleTranslations = {
	admin: "Administrador",
	vet: "Veterinario",
	receptionist: "Recepcionista",
	owner: "Propietario",
};

export type Role = keyof typeof roleTranslations;

export function translateRole(role: Role): string {
	return roleTranslations[role] || role;
}
