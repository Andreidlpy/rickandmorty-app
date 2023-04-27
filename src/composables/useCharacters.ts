import rickAndMortyApi from '@/api/rickAndMortyApi';
import type { Characters } from '@/interface/characters';
import { useCharactersStore } from '@/stores/characters';
import type { AxiosError } from 'axios';
import { ref, computed } from 'vue';

let isLoading = ref( false )
const useCharacters = () => {
    
    const characterStore = useCharactersStore()
    const timeoutId = ref()
    const getCharacterByName = async ( { page = 1, name = '' }: {page?: number, name?: string} = {}) => {
       
        isLoading.value = true
        clearTimeout( timeoutId.value );
        
        timeoutId.value = setTimeout( async () =>{

            try {
                
                const { data } = await rickAndMortyApi.get(`/character/?page=${page}&name=${name}`);
                
                characterStore.setCharacters( data )

            } catch (error) {
                if ((error as AxiosError).response && (error as AxiosError).response?.status === 404) {
                    characterStore.setCharacters( { info: {}, results: [] } )
                }else {
                    console.error(error);
                }
                console.error(error);
            } finally {
                isLoading.value = false
            }

        },500)
        
    };

    const getCharacterById = async ( id: string ) => {
       
   
        try {
            
            const { data } = await rickAndMortyApi.get(`/character/${id}`);
            
            characterStore.setCharacter( data )

        } catch (error) {
            if ((error as AxiosError).response && (error as AxiosError).response?.status === 404) {
                characterStore.setCharacter( {} )
            }else {
                console.error(error);
            }
            console.error(error);
        } 

    }
    const totalPages = computed(() => {
        const totalResults = characterStore.characters?.info.count;
        const resultsPerPage = characterStore.characters?.results.length;
        return Math.ceil(totalResults! / resultsPerPage!);
    });

    return {
        characters: computed(() => characterStore.characters),
        character: computed(() => characterStore.character),
        totalPages,
        getCharacterByName,
        isLoading,
        getCharacterById,
    };
};

export default useCharacters;
