<script setup lang="ts">
import { inject } from 'vue';
const isOpenSidebar = inject<Boolean>('isOpenSidebar', false);
</script>
<template>
	<header class="sticky top-0 bg-rose-500 z-40">
		<UContainer>
			<UButton label="toggle" @click="isOpenSidebar = !isOpenSidebar" />
		</UContainer>
	</header>
</template>