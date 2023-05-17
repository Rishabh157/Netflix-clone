import React, { useState, useEffect } from 'react';
import { API_KEY, TMDB_URL } from '../../constants/constants';

// const NotificationPanelData = [
//     {
//         id: 1,
//         poster_path: 'https://occ-0-56-41.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABViDPrWPfDOOymtHJKNbzlcWS5Z-fJ7Z7Nduhai3Z5n9NFCMYelHL8GTvTrdUN6KvGFWb6Q2-mUviQ5RJhljPyEbJPhwid43fQQ.webp?r=8ea',
//         title: 'New Arrival Your Place Or Mine',
//         release_date: '3 days to go',

//     },
//     {
//         id: 2,
//         poster_path: 'https://occ-0-56-41.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABY689JwxYnh6znueLbRRPAO7aJnzwIg5H-Fxp--nUgdWYW0gStVJ5fqJfowouIJJQyyDAlVms2jZ6JBGLJom1OrSi-LyrnWdikE.webp?r=bea',
//         title: 'Swadesh',
//         release_date: '6 days to go',

//     },
//     {
//         id: 3,
//         poster_path: 'https://occ-0-56-41.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZpL6aBfyXFNOiNX4NLYYpnCgL_sVhFefSBEFPO4_uBBEQTZ6RlT_OE5xjaBOHdp6Z0H6GU1ltvrjKxiqZMgOM0K8qdCeLJu6IBI5a-AjB2hlWdNJrn6Sa8bKxaU9jbkvzWR0lnOBf8JgdaYNAyd22OvWB_pB6vfaqxDzlyRMIWZQ6DoRW10I94QMp2UYBQ.jpg?r=8a4',
//         title: 'money heist',
//         release_date: '14 days to go',

//     },
//     {
//         id: 4,
//         poster_path: 'https://occ-0-2164-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUbXaCfmUaVZC9HOrQ90KQwYyEbl0tVfBUAm0GnaxT5hT0zH8gJjaxDCm3QRf90q4PlNhCml9L_4QRucUflcKZAGklQHBGn4OXE.webp?r=a41',
//         title: 'Interstellar',
//         release_date: '20 days to go',

//     },
//     {
//         id: 5,
//         poster_path: 'https://occ-0-56-41.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABX9gJQADQHrLkA77z6QdygheEDhy1o2VKDwd_xP23iEl4n_kEBQqn8y71UdXOhU000nTqA4MKMC2nPbvZQiGnqZu-jxa4uGPo4LbB0mwSMtOJIvtCGCYP5_HikEwxg0oBZ3d.jpg?r=61f',
//         title: 'Stranger Things',
//         release_date: '4 weeks to go',
//     },
//     {
//         id: 6,
//         poster_path: 'https://occ-0-56-41.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABV6vK26_6mcCzmE6_sl5ABQus6oELMO5pllYPfSzWZlDcc-O5ym01TxVuyGxuUypF97iVKN-KlBE5gGa1-x4upHutxw9jPhKOR4.webp?r=4b7',
//         title: 'World War Z',
//         release_date: '1 years to go'
//     },
// ]


const NotificationPanel = () => {

    const [NotificationPanelData, setnotifiData] = useState([])

    // useEffect(() => {
    //     fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
    //         .then((res) => res.json())
    //         .then(data => {
    //             setnotifiData(data.results)
    //         })
    //         .catch(err => console.log(err))
    // }, [])

    return (
        <>
            <div className='py-1 border-[1px] w-[420px] h-[400px] overflow-y-auto scroll-smooth absolute right-0 top-10 rounded-[2px] border-notifi-border child-notifi'>
                {NotificationPanelData?.map(ele => {
                    return (
                        <div key={ele.id}
                            className='flex p-3 border-b border-notifi-border group cursor-pointer hover:bg-black last:border-none'>
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
                                <span className='text-panle-text text-[11px]'>{ele.release_date}</span>
                            </div>

                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default NotificationPanel;
