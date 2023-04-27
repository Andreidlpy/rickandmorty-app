import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Characters, Result } from '@/interface/characters'


export const useCharactersStore = defineStore('characters', () => {
 
  const characters = ref<Characters>()
  const character = ref<Result>()

  const setCharacters = ( data? : any ) => {
    characters.value = data
  }
  const setCharacter = ( data? : any ) => {
    character.value = data
  }

  return { 
    characters,
    character,
    getCharacters: computed (() => characters.value),
    getCharacter: computed (() => character.value),
    getPages: computed(() => characters.value?.info.pages),
    setCharacters,
    setCharacter
  }
})
