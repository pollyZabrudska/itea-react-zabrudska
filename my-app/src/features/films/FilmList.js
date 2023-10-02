import "./styles/index.scss";

export const FilmList = (props) => {
    const { favorites } = props;
    return (
        <div className="film-list">
         {favorites.map((favorite, index) => (
        <div key={index}>
          <h3>{favorite.name}</h3>
          <p>{favorite.desc}</p>
          <img src={favorite.image} alt={favorite.name} />
        </div>
      ))}
        </div>
    );
};