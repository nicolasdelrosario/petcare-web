"use client";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { messages } from "@/config/messages";
import { routes } from "@/config/routes";
import { useAuth } from "@/hooks/use-auth";
import { type SignInSchema, signInSchema } from "@/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { type SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

function SignInForm() {
	const router = useRouter();
	const { signIn } = useAuth();
	const { isPending } = signIn;

	const form = useForm<SignInSchema>({
		resolver: zodResolver(signInSchema),
		defaultValues: {
			email: "",
			password: "",
		},
		mode: "onSubmit",
	});

	const onSubmit: SubmitHandler<SignInSchema> = (credentials) => {
		signIn.mutate(credentials, {
			onSuccess: () => {
				toast.success("Bienvenido!");
				router.push(routes.private.dashboard.home.path);
			},

			onError: () => {
				toast.error(messages.errors.auth.invalidCredentials);
			},
		});
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>{messages.form.labels.email}</FormLabel>
							<FormControl>
								<Input
									type="email"
									placeholder={messages.form.placeholders.email}
									disabled={isPending}
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>{messages.form.labels.password}</FormLabel>
							<FormControl>
								<Input
									type="password"
									placeholder={messages.form.placeholders.password}
									disabled={isPending}
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button type="submit" className="w-full" disabled={isPending}>
					{isPending
						? messages.form.buttons.loading
						: messages.form.buttons.signIn}
				</Button>
			</form>
		</Form>
	);
}

export default SignInForm;
