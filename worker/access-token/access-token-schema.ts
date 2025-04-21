import { z } from "zod";

export const accessTokenSchema = z
	.object({
		code: z.string().min(1).optional(),
		refresh_token: z.string().min(1).optional(),
	})
	.refine(
		(data) => !(data.code == undefined && data.refresh_token == undefined),
		"Either code or refresh_token is required"
	)
	.refine(
		(data) => !(data.code != undefined && data.refresh_token != undefined),
		"Just one of code or refresh_token is required"
	);
