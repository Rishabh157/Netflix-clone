import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SingleWatchPage = () => {

    const { id } = useParams();
    const [data, setdata] = useState({})


    useEffect(() => {
        const getDummyData = () => {
            fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
                .then((res) => res.json())
                .then((data) => setdata(data))
                .catch(err => console.log(err))
        }
        getDummyData()
    }, [])

    return (
        <div className='text-white'>
            <img
                src={`${data?.thumbnailUrl}`}
                className='h-[400px] rounded '
                alt='movie-card'
                loading='lazy'
            />
            {data?.id}
            <h1 className='text-white text-[52px]'>{data?.title}</h1>
        </div>
    )
}

export default SingleWatchPage;
