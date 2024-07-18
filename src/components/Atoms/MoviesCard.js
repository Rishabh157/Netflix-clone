import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ image, url, onClick }) => {

    return (
        <Link to={url} onClick={onClick} >
            <div className={`mr-2 relative bg-black h-[220px] w-[170px] rounded ${!image ? 'animate-movie-card-pulse' : 'hover:scale-105 transition-all'}`}>
                <img
                    src={image}
                    className='absolute top-0 left-0 object-cover h-full w-full rounded '
                    alt='posterimage'
                    loading='lazy'
                />
            </div>
        </Link>
    )
}

export default MovieCard;


// Loading Movie Card Component 
export const LoadingMovieCard = () =>
    <div className={`mr-2 bg-black h-[220px] w-[140px] rounded animate-movie-card-pulse`}></div>
