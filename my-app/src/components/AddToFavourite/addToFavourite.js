import s from "./index.module.css" //стилі за допомогою Модулів
import { useState, onClick } from "react";
import "../../features/films/styles/index.scss";

export const AddToFavourite = (props) => {
    const { name, image, desc, onAddToFavorites } = props;
    const [added, setAdded] = useState(false);
    const handleAddToFavorites = () => {
        onAddToFavorites({ name, image, desc });
        setAdded(!added);
      };
   
    return (
    <div className="film">
    <h4 className="film-name">{name}</h4>
    <img src={image} alt={name} className="film-image"/>
    <p className="film-desc">{desc}</p>
    <button className={s.customButton} onClick={handleAddToFavorites}>
    {added ? "Remove from favourites" : "Add to favourites"}
    </button>
    </div>
    );
};