import { locales } from '$i18n/runtime.js';

export const ssr = false;
export const prerender = true;

export function entries() {
	return locales.map((locale) => ({ locale }));
}
