<template>
    <nav>
      <ul class="flex justify-center">
        <li>
          <button
            :disabled="currentPage === 1"
            @click="changePage(currentPage - 1)"
            class="mx-2 px-2 py-1 rounded-md bg-blue-500 text-white disabled:bg-gray-500 disabled:cursor-not-allowed"
          >
            Anterior
          </button>
        </li>
        <template v-if="showStartDots">
          <li>
            <span class="px-2 py-1">...</span>
          </li>
        </template>
        <template v-for="page in pagesToShow">
          <li >
            <button
              @click="changePage(page)"
              :class="['px-2 py-1 rounded-md', currentPage === page ? 'bg-blue-500 text-white' : 'bg-white text-blue-500']"
            >
              {{ page }}
            </button>
          </li>
        </template>
        <template v-if="showEndDots">
          <li>
            <span class="px-2 py-1">...</span>
          </li>
        </template>
        <li>
          <button
            :disabled="currentPage === totalPages"
            @click="changePage(currentPage + 1)"
            class="mx-2 px-2 py-1 rounded-md bg-blue-500 text-white disabled:bg-gray-500 disabled:cursor-not-allowed"
          >
            Siguiente
          </button>
        </li>
      </ul>
    </nav>
  </template>

<script setup lang="ts">
import { computed, toRef } from 'vue';

interface Props {
    totalPages: number;
    currentPage: number;
    changePage: (pageNumber: number) => void;
}


const props = defineProps<Props>()


const totalPages = toRef(props, 'totalPages');
const currentPage = toRef(props, 'currentPage');


const pagesToShow = computed(() => {
    let pages = [];
      let startPage, endPage;

      if (totalPages.value <= 5) {
        // Si hay menos de 5 páginas, mostrar todas
        startPage = 1;
        endPage = totalPages.value;
      } else {
        // Si hay más de 5 páginas, mostrar solo algunas
        if (currentPage.value <= 3) {
          startPage = 1;
          endPage = 5;
        } else if (currentPage.value + 1 >= totalPages.value) {
          startPage = totalPages.value - 4;
          endPage = totalPages.value;
        } else {
          startPage = currentPage.value - 2;
          endPage = currentPage.value + 2;
        }
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      return pages;
})

const showStartDots = computed(( )=>  {
      return pagesToShow.value[0] > 1;

})
const showEndDots = computed(() => {
      return pagesToShow.value[pagesToShow.value.length - 1] < totalPages.value;
})
</script>

<style scoped>
button[disabled] {
  opacity: 0.5;
}
</style>