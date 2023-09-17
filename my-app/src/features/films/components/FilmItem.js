import { Input } from "../../../components/Input/Input";

export const FilmItem = ({ item }) => {
    return (
    <>
    <div className="film">
        <h4 className="film-name">Sherlock Holmes</h4>
            <img src="https://static.hdrezka.ac/i/2013/7/30/ib112bef22285rd76q76o.jpg"
            alt="Sherlock Holmes"
            className="film-image"/>
            <p className="film-desc">London, 1890 Five ritual murders have been committed in the city, and another
            one is about to happen. But the great detective Sherlock Holmes and his faithful
            friend and assistant Dr. Watson manage to prevent the crime.</p>
            <Input />
        </div>
        <div className="film">
            <h4 className="film-name">Spider Man. Away from home</h4>
            <img src="https://static.hdrezka.ac/i/2022/2/2/e1d13f6b20b6fub59n85l.jpg"
            alt="film" 
            className="film-image"/>
            <p className="film-desc">The events unfold around Peter Parker, who is trying to come to terms with the many <br />
            changes that have occurred since the final battle of the Avengers.</p>
            <Input />
        </div>
    </>
    );
};