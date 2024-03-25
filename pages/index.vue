<script setup lang="ts">
// import { definePageMeta } from 'nuxt/dist/pages/runtime';

// definePageMeta({
// 	// middleware: [
// 	// 	'auth'
// 	// ]
// })

const { data } = await useFetch('/api/boards');

const now = new Date();
</script>
<template>
	<div>
		<h5>Hello, World!</h5>
		<h5>is realtime?</h5>
		<span>Now: {{ now.getFullYear() }} - {{ now.getMonth() + 1 }} - {{ now.getDate() }}</span>
	</div>
	<div>{{ JSON.stringify(data) }}</div>
</template>