import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server:{
		proxy:{
			'/products':{
				target: 'https://dummyjson.com/',
				changeOrigin: true,
				secure: true,
				configure: (proxy, _options) => {
					proxy.on('proxyReq', (proxyReq, req, _res) => {
					  console.log('Sending Request to the Target:', req.method, req.url);
					});
				}
			}
		}
	}
});
