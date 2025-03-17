import type { UserSchema } from "@/schemas/user";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getInitials } from "@/utils/get-initials";
import { translateRole } from "@/utils/role-translations";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";

function CardStaff({ user }: { user: UserSchema }) {
	return (
		<Card className="bg-sidebar">
			<CardHeader className="flex flex-row items-center gap-4">
				<Avatar>
					<AvatarImage src="https://github.com/shadcn.png" alt={user.name} />
					<AvatarFallback>{getInitials(user.name)}</AvatarFallback>
				</Avatar>
				<div className="flex flex-col">
					<CardTitle className="break-words font-semibold text-base tracking-wide">
						{user.name}
					</CardTitle>
					<p className="text-muted-foreground text-sm">
						{translateRole(user.role)}
					</p>
				</div>
			</CardHeader>
			<CardContent>
				<div className="space-y-2 text-muted-foreground">
					<div className="flex items-center gap-2">
						<Mail className="size-4" />
						<span className="truncate text-sm">{user.email}</span>
					</div>
					<div className="flex items-center gap-2">
						{user.phone && (
							<>
								<Phone className="size-4" />
								<span className="truncate text-sm">{user.phone}</span>
							</>
						)}
					</div>
				</div>
			</CardContent>
		</Card>
	);
}

export default CardStaff;
