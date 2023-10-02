import { Fantasy } from "../../components/films/fantasy";
import { Crime } from "../../components/films/crime";
import { Menu } from "../../features/Menu/Menu";
import { useState } from "react";
import "../../components/AddToFavourite/index.module.css"

export const Home = (props) => {
    const { name, image, desc } = props;
    const [searchFilm, setSearchFilm] = useState('');
    const handleSearchInputChange = (e) => {
        setSearchFilm(e.target.value);
    };
    const filteredMovies = props.filter((film) => {
        return film.name.toLowerCase().includes(searchFilm.toLowerCase());
    });
    return (
    <>
    <Menu />
    <div>
    <h1>Home</h1>
    <h2>Fantasy</h2>
    <input
    type="text"
    placeholder="Search movies..."
    value={searchFilm}
    onChange={handleSearchInputChange}
    />
    {filteredMovies.map((film) => (
        <div className="film">
        <h4 className="film-name">{name}</h4>
        <img src={image} alt={name} className="film-image"/>
        <p className="film-desc">{desc}</p>
        </div>
    ))}
    <Fantasy />
    <h2>Crime</h2>
    <Crime />
    </div>
    </>
    );
};