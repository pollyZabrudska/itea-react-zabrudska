import { Crime } from "../../components/films/crime";
import { Fantasy } from "../../components/films/fantasy";

export const Home = () => {
    return (
    <div>
    <h1>Home</h1>
    <h2>Fantasy</h2>
    <Fantasy />
    <h2>Crime</h2>
    <Crime />
    </div>
    );
};