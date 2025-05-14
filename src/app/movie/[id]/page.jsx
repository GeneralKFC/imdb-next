import Image from "next/image";
export default async function MoviePage({params}) {
  const movieId= params.id;
  const res=await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`)
  const movie=await res.json();

  return(
  <div className="flex pb-10 w-full h-full pt-5 pl-15 pr-15 gap-3 md:pt-8 flex flex-col xl:flex-row content-center max-w-6xl mx-auto md:space-x-6">
    <Image className="flex rounded-md md:m-auto" alt={`${movieId}`} src={`https://image.tmdb.org/t/p/original${movie.backdrop_path || movie.poster_path}`} width={500} height={300}>
    </Image>
    <div className="flex flex-col gap-4 ">
      <h1 className="font-bold ">{movie.title||movie_name}</h1>
      <p>{movie.overview}</p>
      <p className="flex gap-1"><span className="font-bold">Data Released:</span>{movie.release_date||movie.first_air_date}</p>
      <p  className="flex gap-1"><span className="font-bold">Rating:</span>{movie.vote_count}</p>
    </div>
  </div>
)
}
