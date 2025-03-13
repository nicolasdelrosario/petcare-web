import MaxWidthWrapper from "@/components/max-width-wrapper";
import Nav from "../components/nav";

import { routes } from "@/config/routes";

function Home() {
	const breadcrumbItems = [
		{
			label: routes.private.dashboard.home.title,
			isCurrentPage: true,
		},
	];

	return (
		<MaxWidthWrapper className="min-h-screen min-w-full pb-4 lg:px-5">
			<Nav
				title={routes.private.dashboard.home.title}
				breadcrumbItems={breadcrumbItems}
			/>
			<div className="grid grid-cols-1 gap-6 space-y-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
				<div className="aspect-video rounded-xl bg-muted/80" />
				<div className="aspect-video rounded-xl bg-muted/80" />
				<div className="aspect-video rounded-xl bg-muted/80" />
				<div className="aspect-video rounded-xl bg-muted/80" />
			</div>
			<div className="min-h-[100vh] flex-1 rounded-xl bg-muted/80 md:min-h-min" />
		</MaxWidthWrapper>
	);
}

export default Home;
