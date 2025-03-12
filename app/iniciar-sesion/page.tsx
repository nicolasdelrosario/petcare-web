import MaxWidthWrapper from "@/components/max-width-wrapper";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import SignInForm from "./sign-in-form";

function Page({ className }: { className?: string }) {
	return (
		<MaxWidthWrapper
			className={cn("h-screen max-w-[420px] justify-center", className)}
		>
			<Card>
				<CardHeader>
					<CardTitle className="text-2xl">Accede a tu cuenta</CardTitle>
					<CardDescription>
						Ingresa tus datos para acceder a tu cuenta
					</CardDescription>
				</CardHeader>
				<CardContent>
					<SignInForm />
				</CardContent>
			</Card>
		</MaxWidthWrapper>
	);
}

export default Page;
