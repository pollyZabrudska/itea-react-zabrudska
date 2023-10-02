import { FilmInfo } from "../../features/FilmInfo/FilmInfo";
import { RateStars } from "../Rate/Rate";
import { Input } from "../Input/Input";
import { useState } from "react";
import { addToFavourite } from "../AddToFavourite/addToFavourite";
import "../../styles/index.scss";

export const Fantasy = () => {
    const [favorites, setFavorites] = useState([]);
    const addToFavorites = (film) => {
    setFavorites([...favorites, film]);
  };
    return (
    <div>
         <div>
         <addToFavourite name='Spider Man. Away from home' image='https://static.hdrezka.ac/i/2022/2/2/e1d13f6b20b6fub59n85l.jpg' desc='The events unfold around Peter Parker, who is trying to come to terms with the many
            changes that have occurred since the final battle of the Avengers.' onAddToFavorites={addToFavorites}/>
            <FilmInfo />
            <RateStars />
            <Input />
        </div>
        <div>
         <addToFavourite name='Doctor Strange' image='https://static.hdrezka.ac/i/2022/12/8/w1374bff4e71fey46d91c.jpeg' desc='Narcissistic and overly arrogant Stephen Strange, a talented neurosurgeon whose subtle
            filigree manipulations have saved more than one human life, many prophesied the
            glory of one of the greatest doctors of our time.' onAddToFavorites={addToFavorites}/>
            <FilmInfo />
            <RateStars />
            <Input />
        </div>
    </div>
    );
};