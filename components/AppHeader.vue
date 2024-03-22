<script setup lang="ts">
import { inject } from 'vue';
const isOpenSidebar = inject<Boolean>('isOpenSidebar', false);
</script>
<template>
	<header class="sticky top-0">
		<UButton label="toggle" @click="isOpenSidebar = !isOpenSidebar" />
	</header>
</template>