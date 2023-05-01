import React from 'react';

const MovieCard = ({ image, onClick }) => {

    return (
        <div
            className={`mr-2 relative bg-black h-[220px] w-[170px] rounded ${!image ? 'animate-movie-card-pulse' : 'hover:scale-105 transition-all'}`}
            onClick={onClick}
        >
            <img
                src={image}
                className='absolute top-0 left-0 object-cover h-full w-full rounded '
                alt='movie-card'
            />
        </div>
    )
}

export default MovieCard;
