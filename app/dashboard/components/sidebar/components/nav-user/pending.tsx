import { Skeleton } from "@/components/ui/skeleton";
import { ChevronsUpDown } from "lucide-react";

function NavUserPending() {
	return (
		<div className="flex items-center gap-2 rounded-xl border bg-muted/50 p-2">
			<Skeleton className="h-8 w-8 rounded-lg" />

			<div className="grid flex-1 gap-1">
				<Skeleton className="h-4 w-26" />
				<Skeleton className="h-3 w-32" />
			</div>

			<ChevronsUpDown className="ml-auto size-4 text-muted-foreground opacity-50" />
		</div>
	);
}

export default NavUserPending;
