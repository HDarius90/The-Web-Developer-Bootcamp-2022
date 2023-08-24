import Rating from '@mui/material/Rating';
import { useState } from 'react';
export default function RatingComponent() {
    const [score, setScore] = useState(2);
    return (
        <div>
            <h1>Your rating: {score}</h1>
            <Rating
                name="simple-controlled"
                value={score}
                onChange={(event, newValue) => {
                    setScore(newValue);
                }}
            />
        </div>

    )
}