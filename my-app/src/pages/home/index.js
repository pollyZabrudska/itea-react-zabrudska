import { Menu } from "../../features/Menu/Menu";
import { useState } from "react";
import "../../components/AddToFavourite/index.module.css"
import { FilmList } from "../../features/films/FilmList";
import { Crime } from "../../components/films/crime";
import { Fantasy } from "../../components/films/fantasy";

export const Home = () => {

    /*const [searchFilm, setSearchFilm] = useState('');
    const handleSearchInputChange = (e) => {
        setSearchFilm(e.target.value);
    };
    const filteredMovies = apiFilms.filter((el) => {
        return el.name.toLowerCase().includes(searchFilm.toLowerCase());
    });*/
    return (
    <div>
    <Menu />
    <div>
    <h1>Home</h1>
    <Fantasy />
    <Crime />
    </div>
    </div>
    );
};

/* <input
    type="text"
    placeholder="Search movies..."
    value={searchFilm}
    onChange={handleSearchInputChange}
    />
    {filteredMovies.map((el) => (
        <div className="film">
        <h3>{el.Title}</h3>
          <img src={el.Poster} alt={el.Title} />
          <p>{el.Year}</p>
        </div>
    ))} */