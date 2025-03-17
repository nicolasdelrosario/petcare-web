import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

function CardStaffSkeleton() {
	return (
		<Card className="min-h-[166px] bg-sidebar">
			<CardHeader className="flex flex-row items-center gap-4">
				<Skeleton className="h-10 w-10 rounded-full" />
				<div className="flex flex-col">
					<Skeleton className="h-5 w-32" />
					<Skeleton className="mt-1 h-4 w-24 " />
				</div>
			</CardHeader>
			<CardContent>
				<div className="space-y-2 text-muted-foreground">
					<div className="flex items-center gap-2">
						<Skeleton className="h-4 w-4" />
						<Skeleton className="h-4 w-full max-w-52" />
					</div>
					<div className="flex items-center gap-2">
						<Skeleton className="h-4 w-4" />
						<Skeleton className="h-4 w-32" />
					</div>
				</div>
			</CardContent>
		</Card>
	);
}

export default CardStaffSkeleton;
