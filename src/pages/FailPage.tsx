import { FC } from "react";
import {
	Card,
	CardDescription,
	CardFooter,
	CardIconContainer,
	CardTitle,
} from "../components/Card";
import { XCircleIcon } from "../components/icons";
import PageLayout from "../components/PageLayout";

const FailPage: FC = () => {
	return (
		<PageLayout>
			<Card>
				<CardIconContainer>
					<XCircleIcon className="text-[#CA4523]" />
				</CardIconContainer>
				<CardTitle>Authorization failed</CardTitle>
				<CardDescription>
					It looks like you didn’t approve access to the Molinos App.
				</CardDescription>
				<CardFooter>
					Please try again or contact support if the issue persists.
				</CardFooter>
			</Card>
		</PageLayout>
	);
};

export default FailPage;
