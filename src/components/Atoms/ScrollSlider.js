import React from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

const ScrollSlider = (props) => {

  const scrollWrapper = document.getElementById(`scroll-wrapper${props.id}`);
  const scrollContent = document.getElementById(`scroll-content${props.id}`);
  const scrollRightButton = document.getElementById(`scroll-right-button${props.id}`);
  // const scrollLeftButton = document.querySelector('.scroll-left-button');

  const handleScrollRight = () => {

    scrollWrapper.scrollBy({
      left: 1500,
      behavior: 'smooth'
    })

    scrollWrapper.addEventListener('scroll', () => {
      const maxScrollLeft = scrollContent.scrollWidth - scrollContent.clientWidth
      scrollRightButton.style.display = scrollWrapper.scrollLeft >= maxScrollLeft ? 'none' : 'block';
      scrollRightButton.style.display = scrollWrapper.scrollLeft >= maxScrollLeft ? 'none' : 'grid';
      scrollRightButton.style.placeItems = scrollWrapper.scrollLeft >= maxScrollLeft ? 'none' : 'center';
    });

  }


  const handleScrollLeft = () => {

    scrollWrapper.scrollBy({
      left: -1000,
      behavior: 'smooth'
    })

    // const maxScrollLeft = scrollContent.scrollWidth - scrollContent.clientWidth
    // scrollLeftButton.style.display = scrollWrapper.scrollLeft < maxScrollLeft ? 'none' : 'block';

  }

  return (

    <div className='scroll-container'>

      <div id={`scroll-wrapper${props.id}`} className="scroll-wrapper">
        <div id={`scroll-content${props.id}`} className="scroll-content pl-10">

          {props.children}

        </div>
      </div>

      <button
        id={`scroll-left-button${props.id}`}
        className='scroll-left-button'
        onClick={() => handleScrollLeft()}>
        <BsChevronLeft size={35} color='#ffffff' />
      </button>

      <div
        id={`scroll-right-button${props.id}`}
        className="scroll-right-button"
        onClick={() => handleScrollRight()}>
        <BsChevronRight size={35} color='#ffffff' />
      </div>

    </div>
  )
}

export default ScrollSlider;
