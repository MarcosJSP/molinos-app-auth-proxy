import { FC, useEffect, useRef, useState } from "react";
import { queryParams } from "../utils";
import {
	Card,
	CardDescription,
	CardFooter,
	CardIconContainer,
	CardTitle,
} from "../components/Card";
import { CopyIcon, CheckIcon, CheckCircleIcon } from "../components/icons";
import PageLayout from "../components/PageLayout";

const useDebounceClick = () => {
	const [wasClicked, setWasClicked] = useState(false);
	const timeoutIdRef = useRef<number | null>(null);

	const debounceClick = (delay: number = 2000) => {
		if (timeoutIdRef.current) {
			clearTimeout(timeoutIdRef.current);
		}
		setWasClicked(true);
		timeoutIdRef.current = setTimeout(() => {
			setWasClicked(false);
		}, delay);
	};

	return {
		wasClicked,
		debounceClick,
	};
};

const getAppUrl = () => {
	const { code } = queryParams();
	const protocol = import.meta.env.VITE_APP_PROTOCOL;
	const url = `${protocol}://browser-auth?code=${code}`;
	return url;
};

const SuccessPage: FC = () => {
	const { wasClicked: wasCopied, debounceClick } = useDebounceClick();

	useEffect(() => {
		// Open the desktop app (if installed) with the necessary code for login
		window.location.href = getAppUrl();
	}, []);

	const handleOnclick = () => {
		debounceClick();
		// Write the login code to the clipboard
		navigator.clipboard.writeText(getAppUrl());
	};

	return (
		<PageLayout>
			<Card>
				<CardIconContainer>
					<CheckCircleIcon className="text-[#12B017]" />
				</CardIconContainer>
				<CardTitle>Authorization succeeded</CardTitle>
				<CardDescription>
					You are being redirected to
					<br />
					the Molinos App...
				</CardDescription>
				<CardFooter>
					If you haven’t been redirected,
					<br />
					<a
						onClick={handleOnclick}
						className="select-none text-primary-600 active:text-primary-200 hover:underline cursor-pointer"
					>
						copy this token and paste it <br />
						on the Desktop App
						<span className="relative inline-flex items-center justify-center align-middle size-1 ml-2 -mt-0.5 *:text-sm *:transition-all *:absolute *:duration-200">
							<CopyIcon
								className={`opacity-100 ${
									wasCopied && "!opacity-0 !scale-0 ease-out"
								}`}
								aria-label="copy icon"
							/>
							<CheckIcon
								className={`opacity-0 scale-0 ${
									wasCopied &&
									"!opacity-100 !scale-100 ease-in"
								}`}
								aria-label="check icon"
							/>
						</span>
					</a>
				</CardFooter>
			</Card>
		</PageLayout>
	);
};

export default SuccessPage;
