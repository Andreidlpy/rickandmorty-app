
import rickAndMortyApi from '@/api/rickAndMortyApi';
import type { Characters, Result } from '@/interface/characters'
import { ref } from 'vue';
import { useQuery } from "@tanstack/vue-query";


const getCharacterByName  = async ( name : string) => {

    const { data } = await rickAndMortyApi.get(`/character/?name=${name}`)
    console.log( data )
    return data
}


const useCharacter = () => {
    
    
    
    const { isLoading,  isError, data:characters, error } = useQuery({
       queryKey: ['character'],
       queryFn: () => getCharacterByName('Rick Sanchez'),
       
    })
   


    return {
        isLoading,
        characters,
        isError,
        error
    }


}

export default useCharacter