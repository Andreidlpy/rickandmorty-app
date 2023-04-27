<template>
    <div class="bg-gray-100 h-full min-h-[100vh] flex flex-col ">
      <div class="bg-gradient-to-r from-cyan-400 to-yellow-500 h-40 flex flex-col justify-center">
        <div class="container mx-auto">
          <div class="px-5">
            <div class="text-center text-3xl sm:text-5xl text-white font-bold ">
              Rick and Morty
            </div>
            <div class="text-xl pt-2">
              <input
                v-model="characterName"
                @input="getCharacterByName(  { name:characterName } )"
                type="text"
                name=""
                id=""
                class="py-1 px-2 w-full"
                placeholder="Search a character..."
              />
            </div>
          </div>
        </div>
      </div>
      <div class="container mx-auto min-h-full max-h-full mt-2">
        <div class="px-5 overflow-y-auto h-[700px] min-h-full">
          <CardList  />
        </div>
      </div>
      <div class="w-full text-center my-5" v-if="characters?.results.length! > 0">
        <Pagination
          :changePage="changePage"
          :currentPage="currentPage"
          :totalPages="totalPages"
        />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import CardList from '@/components/CardList.vue';
  import Pagination from '@/components/Pagination.vue';
  import useCharacters from '@/composables/useCharacters';
  import { ref } from 'vue';
  
  const characterName = ref('');
  const currentPage = ref(1);
 
  const { characters, totalPages, getCharacterByName } = useCharacters( );
  
  const changePage = (pageNumber: number) => {
    currentPage.value = pageNumber;
    getCharacterByName( { page: currentPage.value, name: characterName.value});
  };
  </script>
  
  <style scoped></style>
  