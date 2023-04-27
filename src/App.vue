<template>
  <RouterView></RouterView>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import useCharacters from './composables/useCharacters';

const { getCharacterByName } = useCharacters()
onMounted(() => {
  getCharacterByName()
})
</script>

<style scoped>

</style>