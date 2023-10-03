import { useState } from "react";
import "./styles/index.scss";
import { useEffect } from "react";
import { apiFilms, getFilms } from "./api";

export const FilmList = () => {
   /* const { favorites } = props; */
    const [films, setFilms] = useState([]);

    const getFilmsFunc = async () => {
      try {
        const {results} = await apiFilms.getFilms();
        setFilms(results.results); 
      } catch (e) {
        console.log(e);
      }
    };

    useEffect(() => {
      getFilmsFunc();
    }, []);
    console.log(films);
    return (
        <div className="film-list">
         {films.map((el) => (
       
        <div>
          <h3>{el.originalTitleText}</h3>
          <img src={el.primaryImage} alt={el.originalTitleText} />
          <p>{el.releaseYear}</p>
        </div>
      ))}
        </div>
    );
};

