import "../../features/films/styles/index.scss";
import { useState } from "react";
import { FilmInfo } from "../../features/FilmInfo/FilmInfo";
import { RateStars } from "../Rate/Rate";
import { Input } from "../Input/Input";
import { AddToFavourite } from "../AddToFavourite/AddToFavourite";

export const Crime = () => {
    const [favorites, setFavorites] = useState([]);
    const addToFavorites = (film) => {
    setFavorites([...favorites, film]);
  };
    return (
    <div>
        <div>
        <AddToFavourite name='Sherlock Holmes'  image='https://static.hdrezka.ac/i/2013/7/30/ib112bef22285rd76q76o.jpg' desc='London, 1890 Five ritual murders have been committed in the city, and another
            one is about to happen. But the great detective Sherlock Holmes and his faithful
            friend and assistant Dr. Watson manage to prevent the crime.' onAddToFavorites={addToFavorites}/>
            <FilmInfo />
            <RateStars />
            <Input />
        </div>
       <div>
        <AddToFavourite name='Sherlock Holmes: A Game of Shadows' image='https://static.hdrezka.ac/i/2013/7/30/z3bbffd7d83fdss49n78n.jpg' desc='Sherlock Holmes gets down to business again after a series of terrorist <br />
            attacks in Vienna and Strasbourg, which, according to the government, were staged by anarchists.' onAddToFavorites={addToFavorites}/>
            <FilmInfo />
            <RateStars />
            <Input />
        </div>
    </div>
    );
};