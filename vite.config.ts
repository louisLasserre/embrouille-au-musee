import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import path from 'path';

const config: UserConfig = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			src: path.resolve('src/'),
			static: path.resolve('static/'),
		}
	}
};



export default config;
