<script setup lang="ts">
// import { definePageMeta } from 'nuxt/dist/pages/runtime';

// definePageMeta({
// 	// middleware: [
// 	// 	'auth'
// 	// ]
// })
const now = new Date();
</script>
<template>
	<h5>Hello, World!</h5>
	<h5>is realtime?</h5>
	<span>Now: {{ now.getFullYear() }} - {{ now.getMonth() + 1 }} - {{ now.getDate() }}</span>
</template>