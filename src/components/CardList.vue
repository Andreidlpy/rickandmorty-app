<script setup lang="ts">
import useCharacters from '@/composables/useCharacters';
import Loading from './Loading.vue';


const { characters , isLoading } = useCharacters()




</script>



<template>
        <ul  class="animate-fade grid grid-cols-5 gap-2 py-5 sm:gap-5 sm:p-5 " v-if="characters?.results.length! > 0 && !isLoading">
            <li v-for="character in characters?.results" class="overflow-hidden shadow-md cursor-pointer hover:scale-105 duration-500 " @click="() => $router.push({name: 'character', params:  {id:character.id} })" >
                <img :src="character?.image" alt="" class="w-full object-cover">
                <div class=" p-1">{{ character?.name }}</div>
            </li>
        </ul>
        <div v-if="characters?.results.length! === 0">
            <div  class="flex justify-center items-center text-center text-xl min-h-full h-[500px]">
                No se encontró ningún personaje
            </div>
        </div>
        <template v-if="isLoading" >
            <div  class="flex justify-center items-center text-center text-xl min-h-full h-[500px]">
                <Loading />
            </div>
        </template>
</template>


<style scoped>
</style>