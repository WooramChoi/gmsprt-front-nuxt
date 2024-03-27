// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ['@nuxt/ui'],
	runtimeConfig: {
		projectId: process.env.PROJECT_ID,
		clientEmail: process.env.CLIENT_EMAIL,
		privateKey: process.env.PRIVATE_KEY,
	}
})