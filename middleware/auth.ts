export default defineNuxtRouteMiddleware((to, from) => {

	console.log('[middleware-auth]')
	console.log(to);
	console.log(from);
	/*
		if (!isAuthenticated()) {
			return navigateTo('/login');
		}
	*/
});