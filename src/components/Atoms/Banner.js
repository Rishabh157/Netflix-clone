import React, { useState, useRef, useEffect } from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

const Banner = () => {

    const [banner, setBanner] = useState({});
    const [isPlay, setIsPlay] = useState(false);

    // refrence element titleHeading and overview Banner
    const titleRef = useRef(null);
    const overviewRef = useRef(null);

    const bannerImages = [
        {
            id: 1,
            title: 'KOTA FACTORY',
            img: 'https://occ-0-41-1501.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABdPMPY3gQdLsvF4NwdhAHzDrg2SyXwK4jp7Qb3-onfVMauBAncR0Vwow9RpjPdrjcK0lg4gOgOMA9pj1CWXHYyDDvcw0uLHx_Fp-.webp?r=a01',
            overview: 'In a city of coaching centers known to train India’s finest collegiate minds, an earnest but unexceptional student and his friends navigate campus life.',
        },
        {
            id: 2,
            title: 'RED ROSE',
            img: 'https://occ-0-41-1501.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABZPhO_NpKg65JQinSeaoBlEl8B-nYqTacAzPSA0qycQIqTlShqsQTO_IbQg9tpcfEkZDziSFOw70U3YR0290RYEDQw8kQnJHQ8nY.webp?r=d61',
            overview: 'A ragtag crew of teens must survive a summer of terror after downloading an app that makes dangerous demands with deadly consequences.'
        },
        {
            id: 3,
            title: 'CLASS',
            img: 'https://occ-0-41-1501.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABemPhsiQ4QQmuymWPbClH1NCUIweq_kAC1sDj1L310_AvM5EG9BPqZtRvaotVbAJ7IISI6oZ5TrTr5QO6bG2bvJ1YLjbUVzhINUd.webp?r=857',
            overview: 'Three students from a poor neighborhood join an exclusive high school for Delhi elite where dark secrets and rumors ultimately lead to murder.',
        },
        {
            id: 4,
            title: 'MAN OF STEEL',
            img: 'https://occ-0-56-41.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABQlIffxPThswD1EqwX3Z92A8Kp3fBJ9Fina24YfUv1Au9SdRnJif_mlDPsXX6PKnFBjJVe98CYwyyAZrjafrdO6MDeyP3aqYIYME.webp?r=e47',
            overview: 'Drifter Clark Kent must keep his powers hidden from the world, but when an evil general plans to destroy Earth, the Man of Steel springs into action.',
        },
        {
            id: 5,
            title: 'KNIGHT AND DAY',
            img: 'https://occ-0-56-41.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABXbn0g_c3ji-Quzh4dHqEazoCXSGSOROYpAOLt3SoeqkldZfiAUEuDmaxBsAmZOr-8PBZyuGutHubRiBzM09N58vmOzGiF7cb5cI.webp?r=8e4',
            overview: 'A woman s airport meet-cute kicks off a wild globe-trotting adventure with a secret agent who might be a keeper — if they can both stay alive.'
        },
        {
            id: 6,
            title: "Don't Look UP",
            img: 'https://occ-0-41-1501.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABY1OVKZd_K_s2iOkjhfaREZdmJgd4yaAjrDsjyikLQ0TQvdSzxKIel8TSONr_H7GGT25NIyvzc6YEhBxJIZEL9o5WHXSFWF7QLYy.webp?r=5f3',
            overview: 'Two astronomers go on a media tour to warn humankind of a planet-killing comet hurtling toward Earth. The response from a distracted world: Meh.'
        },
        {
            id: 7,
            title: "Vincenzo",
            img: 'https://occ-0-2483-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABZWXhaCt6ZWB9TV1IkSi_TOX7Q0cMIQ5WdUu9Baexmp-R8w6eITdklv5tEykYgpZy4ek5iqMY8zZlcmQTgJ4sfeeXQur9qm_cXsa.webp?r=1d2',
            overview: 'During a visit to his motherland, a Korean-Italian mafia lawyer gives an unrivaled conglomerate a taste of its own medicine with a side of justice.'
        },
    ]

    useEffect(() => {

        document.title = 'Home - Netflix';

        const randomImage = bannerImages[Math.floor(Math.random() * bannerImages.length)]
        setBanner(randomImage)

        // fetch('https://api.themoviedb.org/3/trending/all/week?api_key=f1b92f4ce0a6c48358b6a55b97b243e7&language=en-US')
        //     .then((res) => res.json())
        //     .then(data => setBanner(data.results[Math.floor(Math.random() * data.results?.length)]))
        //     .catch(err => console.log(err))
    }, [])


    // this function is called for play video
    const handlePlay = () => {

        setTimeout(() => {
            setIsPlay(true);

            titleRef.current.style.transform = 'translateY(90px)';
            // titleRef.current.style.fontSize = '52px';

            overviewRef.current.style.opacity = '0';
            overviewRef.current.style.transform = 'translateY(60px)';
        }, 200);
    }


    // this function is called for pause video
    const handlePause = () => {

        setTimeout(() => {
            setIsPlay(false);

            titleRef.current.style.transform = 'translateY(0px)';
            // titleRef.current.style.fontSize = '60px';

            overviewRef.current.style.opacity = '1';
            overviewRef.current.style.transform = 'translateY(0px)';

        }, 200);
    }

    return (
        <div
            style={{
                backgroundImage: `url(${banner?.img})`,
                height: '100vh',
                backgroundSize: 'cover',
                backgroundRepeat: "no-repeat",
                position: 'relative',
                top: '-81px',
                zIndex: '10',
                display: 'flex',
                alignItems: 'center',
                paddingLeft: '38px'
            }}>

            <div className='w-[50%] h-[400px] pt-40'>

                <h1
                    id='banner-heading'
                    ref={titleRef}
                    className='banner-title inline-block text-[60px] font-bold text-white select-none'>
                    {banner?.title}
                </h1>

                <p
                    id='overView'
                    ref={overviewRef}
                    className={`text-white pr-20 select-none banner-overview`}>
                    {banner?.overview}
                </p>

                <div className='flex mt-5'>

                    <button
                        className='flex top-0 items-center px-6 py-1 bg-white rounded font-bold mr-4 select-none cursor-pointer'
                        type='button'
                        onClick={() => isPlay ? handlePause() : handlePlay()}
                    >
                        {isPlay ? <BsPauseFill
                            size={35}
                            className='mr-1'
                        /> : <BsFillPlayFill
                            size={35}
                            className='mr-1'
                        />}
                        Play
                    </button>

                    <button className='flex items-center px-6 py-1 bg-[#6d6d6eb3] text-white rounded font-bold select-none'>
                        <AiOutlineInfoCircle size={32} color='' className='mr-1' />
                        More Info
                    </button>
                </div>
            </div>

            <div className='absolute select-none right-0 bottom-24 px-4 py-1 font-semibold bg-bg-ag text-white text-[14px] border-l-white border-l-[2px]'>
                U&#x2f;A 13+
            </div>

        </div>
    )
}

export default Banner;
