import { Fantasy } from "../../components/films/fantasy";
import { Crime } from "../../components/films/crime";
import { Menu } from "../../features/Menu/Menu";

export const Home = () => {
    return (
    <>
    <Menu />
    <div>
    <h1>Home</h1>
    <h2>Fantasy</h2>
    <Fantasy />
    <h2>Crime</h2>
    <Crime />
    </div>
    </>
    );
};