import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import "../../features/films/styles/index.scss";
import { FilmInfo } from "../../features/FilmInfo/FilmInfo";
import { RateStars } from "../Rate/Rate";


export const Crime = () => {
    return (
    <div>
        <div className="film">
            <h4>Sherlock Holmes</h4>
            <img src="https://static.hdrezka.ac/i/2013/7/30/ib112bef22285rd76q76o.jpg" alt="film"
            className="film-image" />
            <p className="film-desc">London, 1890 Five ritual murders have been committed in the city, and another <br />
            one is about to happen. But the great detective Sherlock Holmes and his faithful <br />
            friend and assistant Dr. Watson manage to prevent the crime.</p>
            <FilmInfo />
            <Button />
            <RateStars />
        <Input />
        </div>
        <div className="film">
            <h4>Sherlock Holmes: A Game of Shadows</h4>
            <img src="https://static.hdrezka.ac/i/2013/7/30/z3bbffd7d83fdss49n78n.jpg" alt="film" 
            className="film-image"/>
            <p className="film-desc">Sherlock Holmes gets down to business again after a series of terrorist <br />
            attacks in Vienna and Strasbourg, which, according to the government, were staged by anarchists.</p>
            <FilmInfo />
            <Button />
            <RateStars />
        <Input />
        </div>
        <div className="film">
            <h4>The Shawshank Redemption</h4>
            <img src="https://static.hdrezka.ac/i/2021/3/6/o41759bd352dazn54q16d.jpeg" alt="film" 
            className="film-image"/>
            <p className="film-desc">The cult drama is based on Stephen King's Shawshank Rita Hayworth. <br />
            The film is set in the late 1950s.</p>
            <FilmInfo />
            <Button />
            <RateStars />
        <Input />
        </div>
        <div  className="film">
            <h4>Léon</h4>
            <img src="https://static.hdrezka.ac/i/2013/11/23/x22fbdcdf6d34zp97c34z.jpg" alt="film" 
            className="film-image"/>
            <p className="film-desc">Leon leads a quiet and peaceful lifestyle in one of the not the best <br />
            areas of New York called Little Italy.</p>
            <FilmInfo />
            <Button />
            <RateStars />
        <Input />
        </div>
        <div className="film">
            <h4>The Dark Knight</h4>
            <img src="https://static.hdrezka.ac/i/2013/11/7/qbcd3c26d5b8efr73m34a.jpg" alt="film" 
            className="film-image"/>
            <p className="film-desc">The hero of the film, Bruce Wayne, aka Batman, is going to end <br />
            his secret life, realizing that the city really needs not the "Dark Knight", <br />
            who is on the other side of the law, but a real, explicit hero.</p>
            <FilmInfo />
            <Button />
            <RateStars />
        <Input />
        </div>
    </div>
    );
};