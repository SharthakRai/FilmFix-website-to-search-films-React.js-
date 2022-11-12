import React from "react";

const MovieCard = ({movie1}) => {
    return (
        <div className="movie">
            <div>
                <p>{movie1.year}</p>
            </div>

            <div>
                <img src={movie1.poster !== 'N/A' ? movie1.poster : 'https://via.placeholder.com/300x450'} alt={movie1.title} />
            </div>

            <div>
                <span>{movie1.Type} </span>
                <h3>{movie1.Title}</h3>
            </div>


        </div>
    );
};

export default MovieCard;
