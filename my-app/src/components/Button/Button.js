import s from "./index.module.css" //стилі за допомогою Модулів

export const Button = () => {
    return <button className={s.customButton}>Add to Favourites</button>;
};