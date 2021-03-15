/**
 * IMPORTS
 */
import { GenreResponseProps, MovieProps } from "../App";
import { Header } from "./Header";
import {MovieCard} from "./MovieCard";


/**
 * TYPES
 */
interface IContentProps
{
  movies: MovieProps[];
  selectedGenre: GenreResponseProps;
}


/**
 * EXPORTS
 */
export function Content({movies, selectedGenre}: IContentProps) {
  return (
    <div className="container">
        <Header
          title={selectedGenre.title}
        />

        <main>
          <div className="movies-list">
            {movies.map(movie => (
              <MovieCard title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </div>
  );
}