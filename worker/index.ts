import { Hono } from "hono";
import { zv } from "./validator-wrapper";
import { accessTokenSchema } from "./access-token/access-token-schema";
import {
	getAccessToken,
	FreesoundErrorResponse,
} from "./access-token/access-token-get-access-token";

const app = new Hono<{ Bindings: Env }>();

app.post("/access_token/", zv("json", accessTokenSchema), async (c) => {
	const { code, refresh_token } = c.req.valid("json");
	const { FREESOUND_CLIENT_ID, FREESOUND_CLIENT_SECRET } = c.env;
	try {
		const token = await getAccessToken({
			clientId: FREESOUND_CLIENT_ID,
			clientSecret: FREESOUND_CLIENT_SECRET,
			code: code,
			refreshToken: refresh_token,
		});
		return c.json(token, 200);
	} catch (error) {
		if (error instanceof FreesoundErrorResponse) {
			console.error(
				`Error: ${error.name}`,
				`- Status: ${error.status}`,
				`- Details: ${error.details}`,
				`- code: ${code}`,
				`- refreshToken: ${refresh_token}`
			);

			return c.text("Bad Gateway", 502);
		}

		return c.status(500);
	}
});

export default app;
