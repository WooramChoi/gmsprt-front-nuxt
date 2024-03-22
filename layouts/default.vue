<script setup lang="ts">
import { provide, ref } from 'vue';
import AppFooter from '../components/AppFooter.vue';
import AppHeader from '../components/AppHeader.vue';
import AppSidebar from '../components/AppSidebar.vue';

const isOpenSidebar = ref(false);

provide('isOpenSidebar', isOpenSidebar);
</script>
<template>
	<app-header />
	<app-sidebar />
	<main>
		<UContainer>
			<slot></slot>
		</UContainer>
	</main>
	<app-footer />
</template>