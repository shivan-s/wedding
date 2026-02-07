import { setLocale, assertIsLocale, baseLocale } from '$i18n/runtime.js';
import type { LayoutLoadEvent } from './$types';

export function load({ params }: LayoutLoadEvent) {
	setLocale(assertIsLocale(params.locale ?? baseLocale));
}
