import { useState } from "react";
import "./index.scss";


export const RateStars = () => {
 const [rating, setRating] = useState(0);
 const handleStarClick = (starCount) => {
    setRating(starCount);
 };
    return (
        <div className="rating-container">
            {[1, 2, 3, 4, 5].map((starCount) => (
                <span
                key={starCount}
                className={`star ${starCount <= rating ? 'selected' : ''}`}
                onClick={() => (handleStarClick(starCount))}>
                    ★
                </span>
            ))}
        </div>
    );
};