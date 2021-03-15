import {useEffect, useState} from 'react';
import {GenreResponseProps, MovieProps} from '../App';
import {Button} from './Button';
import {api} from '../services/api';

interface ISideBarProps
{
  genres: GenreResponseProps[];
  setMovies: React.Dispatch<React.SetStateAction<MovieProps[]>>;
  setSelectedGenre: React.Dispatch<React.SetStateAction<GenreResponseProps>>;
}

export function SideBar({genres, setMovies, setSelectedGenre}: ISideBarProps) {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
    });

    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              id={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
  );
}