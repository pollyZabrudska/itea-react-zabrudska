import { Input } from "../../../components/Input/Input";
import { RateStars } from "../../../components/Rate/Rate";
import { FilmInfo } from "../../FilmInfo/FilmInfo";

export const FilmItem = ({ name, image, desc, ...props}) => {

console.log(props);

    return (
    <>
    <div className="film">
        <h4 className="film-name">{name}</h4>
            <img src={image} alt="Sherlock Holmes" className="film-image"/>
            <p className="film-desc">{desc}</p>
            <FilmInfo />
            <RateStars />
            <Input />
        </div>
    </>
    );
};