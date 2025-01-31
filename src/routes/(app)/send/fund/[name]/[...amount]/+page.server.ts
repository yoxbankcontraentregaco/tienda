import { fail, redirect } from "@sveltejs/kit";
import { auth, fd, post } from "$lib/utils";

export const actions = {
	default: async ({ cookies, request }) => {
		const body = await fd(request);
		let p;

		try {
			p = await post("/payments", body, auth(cookies));
		} catch (e: any) {
			return fail(400, { message: e.message });
		}

		if (p) redirect(307, `/fund/${body.name}`);
	},
};
