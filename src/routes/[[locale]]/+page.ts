import { locales } from '$i18n/runtime.js';

export const prerender = true;

export function entries() {
	return locales.map((locale) => ({ locale }));
}
