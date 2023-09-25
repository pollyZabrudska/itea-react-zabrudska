import { Button } from "../../components/Button/Button";
import { Input } from "../Input/Input";
import "../../styles/index.scss";
import { FilmInfo } from "../../features/FilmInfo/FilmInfo";
import { RateStars } from "../Rate/Rate";

export const Fantasy = () => {
    return (
    <div>
        <div className="film">
            <h4>Doctor Strange</h4>
            <img src="https://static.hdrezka.ac/i/2022/12/8/w1374bff4e71fey46d91c.jpeg" alt="film" 
            className="film-image"/>
            <p className="film-desc">Narcissistic and overly arrogant Stephen Strange, a talented neurosurgeon whose subtle <br />
            filigree manipulations have saved more than one human life, many prophesied the <br /> 
            glory of one of the greatest doctors of our time.</p>
            <FilmInfo />
            <Button />
            <RateStars />
        <Input />
        </div>
        <div className="film">
            <h4>Spider Man. Away from home</h4>
            <img src="https://static.hdrezka.ac/i/2022/2/2/e1d13f6b20b6fub59n85l.jpg" alt="film" 
            className="film-image"/>
            <p className="film-desc">The events unfold around Peter Parker, who is trying to come to terms with the many <br />
            changes that have occurred since the final battle of the Avengers.</p>
            <FilmInfo />
        <Button />
        <RateStars />
        <Input />
        </div>
        <div className="film">
            <h4>Spider Man. No way home</h4>
            <img src="https://static.hdrezka.ac/i/2022/3/14/cf91390df2b64sk81i26j.jpg" alt="film" 
            className="film-image"/>
            <p className="film-desc">After defeating Mysterio, Peter Parker's identity is exposed to the world, <br />
            putting his life and mission as Spider-Man in jeopardy.</p>
            <FilmInfo />
        <Button />
        <RateStars />
        <Input />
        </div>
        <div className="film">
            <h4>Spider-Man: Across the Spider-Verse</h4>
            <img src="https://static.hdrezka.ac/i/2023/6/4/s11a39b3c60f8ko11i71d.jpg" alt="film" 
            className="film-image"/>
            <p className="film-desc">Gwen Stacy joins Miguel O'Hara's elite Spider-Men squad and helps protect <br />
            the multiverse from dangerous threats and anomalies.</p>
            <FilmInfo />
        <Button />
        <RateStars />
        <Input />
        </div>
        <div className="film">
            <h4>Spider Man 3</h4>
            <img src="https://static.hdrezka.ac/i/2014/4/22/xd5feb7322747wj74b57m.jpg" alt="film" 
            className="film-image"/>
            <p className="film-desc">After the main character Peter Parker realized that he had a great responsibility <br />
            for the gift given to him, his life gradually began to improve.</p>
            <FilmInfo />
        <Button />
        <RateStars />
        <Input />
        </div>
    </div>
    );
};