import { getReleasedDate } from "../../utils/formatter";
import { SingleMovieTypes } from "../../types/landing-page";
const MovieCard: React.FC<SingleMovieTypes> = ({ movie }) => {
  return (
    <div
      key={movie.title}
      className={`group relative  rounded-md hover:rounded-md hover:shadow-3xl card-shadow`}
    >
      <div className="absolute group-hover:rounded-lg top-0 left-0 w-full h-full bg-[black]/70 " />
      <div className=" p-4 relative ">
        <h1 className="text-white text-2xl font-bold">{movie?.title}</h1>
        <p className="text-[grey] text-xs my-3">
          {getReleasedDate(movie?.release_date)}
        </p>
        <p className="text-white text-sm mt-3 leading-6">
          {movie?.opening_crawl?.substring(0, 258)}...
        </p>
        <div className="w-full h-[0.06rem] bg-red-500 my-4" />
        <p className="text-yellow-500">
          <a href={`${movie.url}`}>More info</a>
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
