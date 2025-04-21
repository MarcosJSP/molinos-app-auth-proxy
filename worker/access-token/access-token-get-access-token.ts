import { ContentfulStatusCode } from "hono/utils/http-status";

type GetAccessTokenParams = {
	code?: string;
	refreshToken?: string;
	clientId: string;
	clientSecret: string;
};

type FreesoundAccessTokenResponse = {
	access_token: string;
	scope: string;
	expires_in: string;
	refresh_token: string;
};

class FreesoundErrorResponse extends Error {
	status: ContentfulStatusCode;
	details: string;
	constructor({ status, details }: { status: number; details: string }) {
		super("Freesound API Error");
		this.name = "FreesoundErrorResponse";
		this.status = status as ContentfulStatusCode;
		this.details = details;
	}
}

const getAccessToken = async ({
	code,
	refreshToken,
	clientId,
	clientSecret,
}: GetAccessTokenParams): Promise<FreesoundAccessTokenResponse> => {
	const url = "https://freesound.org/apiv2/oauth2/access_token/";

	const body = new URLSearchParams({
		client_id: clientId,
		client_secret: clientSecret,
	});

	if (code) {
		body.append("grant_type", "authorization_code");
		body.append("code", code);
	} else if (refreshToken) {
		body.append("grant_type", "refresh_token");
		body.append("refresh_token", refreshToken);
	}

	const req = await fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
		},
		body,
	});

	if (!req.ok) {
		const error = (await req.json()) as { error: string };
		throw new FreesoundErrorResponse({
			status: req.status,
			details: error.error,
		});
	}

	return (await req.json()) as FreesoundAccessTokenResponse;
};

export { getAccessToken, FreesoundErrorResponse };
