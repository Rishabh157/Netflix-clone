import React, { useEffect } from 'react'

const ATMLoader = () => {

    useEffect(() => {
        // Add a class to the body to disable scrolling
        document.body.style.overflow = 'hidden';

        // Clean up function to remove the class when the component is unmounted
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div className='loader-parent'>
            <div className='loader'></div>
        </div>
    )
}

export default ATMLoader
