const queryParams = (): { [key: string]: string } => {
	try {
		const location = window.location;
		const keyValues = location.search.slice(1).split("&");
		const params = keyValues.reduce((res, kv) => {
			const [k, v] = kv.split("=");
			return { ...res, [k]: v };
		}, {});
		return params;
	} catch {
		throw Error("Error while parsing query params");
	}
};

export { queryParams };
