// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ['@nuxt/ui'],
	runtimeConfig: {
		projectId: process.env.NUXT_PROJECT_ID,
		clientEmail: process.env.NUXT_CLIENT_EMAIL,
		privateKey: process.env.NUXT_PRIVATE_KEY,
	}
})