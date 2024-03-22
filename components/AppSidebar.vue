<script setup lang="ts">
import { inject } from 'vue';
const isOpenSidebar = inject<Boolean>('isOpenSidebar', false);
</script>
<template>
	<aside>
		<USlideover side="left" v-model="isOpenSidebar">
			<div class="p-4 flex-1">
				Sidebar
			</div>
		</USlideover>
	</aside>
</template>