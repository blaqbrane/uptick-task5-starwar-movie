import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export interface movieResponse {
    message:string
}

export const useGetAllMovies = () => {
    const getAllMovies = useQuery({
        queryKey:['get-all-movies'],
        queryFn:( async() => {
            try{
              const res = await axios.get('https://swapi.dev/api/films')
              return res.data
            }catch(err){
              console.log(err)
            }
        }),
        refetchOnWindowFocus: true,
        staleTime: 3000,
    })
    return getAllMovies
}