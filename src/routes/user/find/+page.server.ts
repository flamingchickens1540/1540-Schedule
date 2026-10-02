import { getPerson, identityFromSessionID, isValidSession } from '$lib/db';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { resolve } from '$app/paths';

export const load: PageServerLoad = async ({ cookies }) => {
	const sessionID = cookies.get('session') ?? '';
	const identity = await identityFromSessionID(sessionID);
	if (!(await isValidSession(sessionID, identity))) return redirect(303, '/logout');
	else return redirect(303, resolve(`/user/${identity}`));
};
