import { FC, PropsWithChildren } from "react";
import { MolinosAppIcon } from "./icons";

const Card: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className="text-gray-300 w-[320px] text-center bg-white  [box-shadow:_0px_4px_16px_rgba(1,_50,_152,_0.25)] rounded-2xl hover:shadow-none duration-500 ">
			<div className="flex justify-center items-center py-4 border-b border-gray-900">
				<MolinosAppIcon className="text-xl text-primary-500 mr-1" />
				<span className="font-extrabold text-sm">molinos-app</span>
			</div>
			{children}
		</div>
	);
};

const CardIconContainer: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div
			className="block size-16 text-[4rem] mx-auto mt-14 mb-2.5"
			children={children}
		/>
	);
};

const CardTitle: FC<PropsWithChildren> = ({ children }) => {
	return (
		<h1 className="text-lg font-extrabold mb-1 px-6" children={children} />
	);
};

const CardDescription: FC<PropsWithChildren> = ({ children }) => {
	return <p className="text-sm mb-12 px-6" children={children} />;
};

const CardFooter: FC<PropsWithChildren> = ({ children }) => {
	return (
		<p className="text-xs text-gray-500 mb-8 px-6" children={children} />
	);
};

export { Card, CardTitle, CardDescription, CardFooter, CardIconContainer };
