import React, { useState, useEffect } from 'react';
import { TMDB_URL } from '../../constants/constants';
import { useGetNotificationQuery } from '../../redux/services/BannerService';
import { getDateIntoDDMMYYY } from '../../common/date';

const NotificationPanel = () => {

    const [notifications, setNotifications] = useState([]);
    const [page, setPage] = useState(1);

    const { isLoading, isFetching, data } = useGetNotificationQuery({ page });


    useEffect(() => {
        if (!isLoading && !isFetching) {
            setNotifications((prev) => [...prev, ...data?.results]);
        }
    }, [isLoading, isFetching, data]);


    return (
        <div className='py-1 border-[1px] w-[420px] h-[400px] overflow-y-auto scroll-smooth absolute right-0 top-10 rounded-[2px] border-notifi-border child-notifi'>
            {notifications?.map(ele => {
                return (
                    <div key={ele.id}
                        className='flex p-3 border-b border-notifi-border group cursor-pointer hover:bg-black'>
                        <div>
                            <img src={`${TMDB_URL}${ele.poster_path}`}
                                className='rounded h-[130px]'
                                alt='notifi-images'
                            />
                        </div>

                        <div className='pl-4'>
                            <h1 className='text-panle-text text-[17px] font-bold capitalize group-hover:text-white'>{ele.title}</h1>
                            <p
                                className='text-[12px] w-[250px] text-panle-text group-hover:text-white truncate-notifi'>
                                {ele?.overview}
                            </p>
                            <span className='text-panle-text text-[11px]'>{getDateIntoDDMMYYY(ele.release_date)}</span>
                        </div>

                    </div>
                )
            })}

            {notifications?.length && <div className='flex justify-end text-white py-2 px-4 cursor-pointer select-none'>
                <span className='hover:text-[#E50914] font-bold'
                    onClick={() => setPage(page + 1)}
                >
                    More...
                </span>
            </div>}

        </div>
    )
}

export default NotificationPanel;
