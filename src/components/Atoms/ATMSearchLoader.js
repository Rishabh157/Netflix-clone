import React, { useEffect } from 'react'

const ATMSearchLoader = () => {

    useEffect(() => {
        // Add a class to the body to disable scrolling
        document.body.style.overflow = 'hidden';

        // Clean up function to remove the class when the component is unmounted
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div className='loader-parent-search'>
            <div className='loader-search'></div>
        </div>
    )
}

export default ATMSearchLoader
