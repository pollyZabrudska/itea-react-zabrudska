import { useState } from "react";
import "./index.scss";

export const FilmInfo = () => {
     const [open, setOpen] = useState(false);

     return (
      <div>
         <button className="info-button" onClick={() => setOpen(!open)}>Information</button>
         {open && <div className="modal-window">
         <h4 className="modal-wind-info">Year of release: 2020</h4> 
         <h4 className="modal-wind-info">Rating: 4,5</h4> 
         </div>}
      </div>
     );
};