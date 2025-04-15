import { FC } from "react";
import PageLayout from "../components/PageLayout";

const NotFoundPage: FC = () => {
	return (
		<PageLayout>
			<div className="flex flex-col justify-center items-center gap-2">
				<h1 className="text-5xl ">404</h1>
				<p>Page Not Found ;(</p>
			</div>
		</PageLayout>
	);
};

export default NotFoundPage;
