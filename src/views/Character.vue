
<template>
    <div class="flex flex-col items-center h-screen animate-fade">
        <div class="bg-gradient-to-l from-teal-500 to-yellow-500 w-full h-24 text-end">
            <button class=" hover:underline underline-offset-1 duration-500 p-7 rounded-sm font-bold text-white text-2xl " @click="$router.push({name: 'home'})">
                Inicio
            </button>
        </div>
        <div class="flex flex-col justify-center items-center shadow-2xl p-5 fade-in flex-shrink hover:scale-105 duration-300 m-10 text-center">
            <div class="text-3xl font-semibold">
                {{character?.name}}
            </div>
            <div>
                Gender: <span class="font-semibold capitalize">{{character?.gender}}</span>
            </div>
            <div>
                Status: <span class="font-semibold capitalize">{{character?.status}}</span>         
            </div>
            <div>
                Species: <span class="font-semibold capitalize">{{character?.species}}</span>         
            </div>
            <div>
                Location: <span class="font-semibold capitalize">{{character?.location.name}}</span>         
            </div>
            <div class="relative">
                <img  :src="character?.image" alt="" srcset="">
                <div class="absolute top-0 bg-green-300 px-2 text-dark text-xl">Alive</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import useCharacters from '@/composables/useCharacters';
import { onMounted } from 'vue';

interface Props {
    id: string;
}

const props = defineProps<Props>();

const { getCharacterById  , character} = useCharacters(  )

onMounted(()=> {
    getCharacterById( props.id )
})

</script>

<style scoped>
</style>