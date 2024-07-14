import { useGetAllMovies } from "../../api/movies"
import { bg1 } from "../../assets"

type MovieTypes = {
    title : string
    opening_crawl :string
    released_date :string
    url :string
}

const Movies = () => {
    const { data, isError,isLoading } = useGetAllMovies()
    console.log(data?.results)
    if(isError || isLoading){
        return <h1 className="text-yellow-400 text-center  text-4xl font-bold">Loading...</h1>
    }
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-4 md:px-18 lg:px-24 md:py-8 lg:py-10">
        <div className="card-container grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
          {
            data?.results?.map((movie : MovieTypes) => (
                <div className={`group relative  rounded-md hover:rounded-md hover:shadow-3xl card-shadow`}>
                {/* <img src={bg1} alt='' className="w-full h-full rounded-md"/> */}
                <div className="absolute group-hover:rounded-lg top-0 left-0 w-full h-full bg-black/90 "/>
               <div className=" p-4 relative">
               <h1 className="text-white text-xl font-bold">{movie?.title}</h1>
                <p className="text-[grey] text-xs my-3">May 25, 1977</p>
                <p className="text-white text-sm">
                {movie?.opening_crawl?.substring(0,258)}...
                </p>
                <div className="w-full h-[0.06rem] bg-red-500 my-4"/>
                <p className="text-yellow-500"><a href={`${movie.url}`}>More info</a></p>
               </div>
            </div>
            ))
          }
          
           
        </div>
    </section>
  )
}

export default Movies