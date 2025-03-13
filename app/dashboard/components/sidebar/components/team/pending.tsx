import { Skeleton } from "@/components/ui/skeleton";
import { ChevronsUpDown } from "lucide-react";

function TeamPending() {
	return (
		<div className="flex items-center gap-2 rounded-lg border bg-muted/50 p-2">
			<Skeleton className="h-8 w-8 rounded-lg" />

			<div className="grid flex-1 gap-1">
				<Skeleton className="h-4 w-24" />
				<Skeleton className="h-3 w-30" />
			</div>

			<ChevronsUpDown className="ml-auto size-4 text-muted-foreground opacity-50" />
		</div>
	);
}

export default TeamPending;
