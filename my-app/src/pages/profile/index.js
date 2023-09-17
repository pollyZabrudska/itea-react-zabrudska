import { Menu } from "../../features/Menu/Menu";
import { FilmList } from "../../features/films/FilmList";


export const Profile = () => {
    return (
    <>
        <Menu />
        <h1>Profile</h1>
        <h2>Favourite films</h2>
        <div>
        <FilmList />
        </div>
    </>
    );
};