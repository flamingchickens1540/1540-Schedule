import { getNamesInRole, msToSlot, getCFG } from '$lib/db';
import { Role } from '$lib/types';
import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	if (!((await getCFG()).find((v) => v.key === 'scheduleVisible')?.value == '0' ? false : true))
		return json({ slot: null, scouters: [] });
	const slot = await msToSlot(Date.now());
	if (!slot) return json({ slot: null, scouters: [] });
	return json({ slot: slot.label, scouters: await getNamesInRole(Role.Scouting, slot.num) });
};
