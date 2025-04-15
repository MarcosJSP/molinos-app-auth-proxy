import { FC, PropsWithChildren } from "react";

const PageLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className="h-screen w-screen">
			<div className="flex p-4 justify-center items-center size-full [background:radial-gradient(50%_50%_at_50%_50%,_rgba(13,_91,_254,_0.35)_0%,_rgba(237,_240,_246,_0.1015)_100%),_#FFFFFF]">
				{children}
			</div>
		</div>
	);
};

export default PageLayout;
