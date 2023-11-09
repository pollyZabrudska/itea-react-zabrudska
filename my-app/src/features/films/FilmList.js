import "./styles/index.scss";
import { FilmItem } from "./FilmItem/Filmitem";

export const FilmList = (name, image, desc) => {
  return (
      <div className="film-list">
          <FilmItem name='Sherlock Holmes' image='https://static.hdrezka.ac/i/2013/7/30/ib112bef22285rd76q76o.jpg' desc='London, 1890 Five ritual murders have been committed in the city, and another
          one is about to happen. But the great detective Sherlock Holmes and his faithful
          friend and assistant Dr. Watson manage to prevent the crime.' />
          <FilmItem name='Spider Man. Away from home' image='https://static.hdrezka.ac/i/2022/2/2/e1d13f6b20b6fub59n85l.jpg' desc='The events unfold around Peter Parker, who is trying to come to terms with the many
          changes that have occurred since the final battle of the Avengers.' />
          <FilmItem name='Doctor Strange' image='https://static.hdrezka.ac/i/2022/12/8/w1374bff4e71fey46d91c.jpeg' desc='Narcissistic and overly arrogant Stephen Strange, a talented neurosurgeon whose subtle
          filigree manipulations have saved more than one human life, many prophesied the
          glory of one of the greatest doctors of our time.' />
      </div>
  );
};

