import { ZodSchema } from "zod";
import type { ValidationTargets } from "hono";
import { zValidator } from "@hono/zod-validator";

export const zv = <T extends ZodSchema, Target extends keyof ValidationTargets>(
	target: Target,
	schema: T
) =>
	zValidator(target, schema, (result, c) => {
		if (!result.success) {
			return c.json(
				{ target, error: JSON.parse(result.error.message) },
				400
			);
		}
	});
