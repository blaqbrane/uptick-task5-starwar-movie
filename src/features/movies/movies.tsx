import { FaArrowsSpin } from "react-icons/fa6";
import { useGetAllMovies } from "../../api/movies";
import { MovieTypes } from "../../types/landing-page";
import MovieCard from "./movie-card";
const Movies = () => {
  const { data, isError, isLoading } = useGetAllMovies();
  if (isError || isLoading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen">
        <FaArrowsSpin
          className="flex flex-col justify-center items-center text-yellow-500 animate-spin "
          size={25}
        />
      </div>
    );
  }
  return (
    <section className="max-w-[1400px] mx-auto px-6 py-4 md:px-18 lg:px-24 md:py-8 lg:py-8">
      <div className="card-container grid md:grid-cols-2 lg:grid-cols-3  gap-6">
        {data?.results?.map((movie: MovieTypes) => (
          <MovieCard movie={movie} key={movie.title} />
        ))}
      </div>
    </section>
  );
};

export default Movies;
