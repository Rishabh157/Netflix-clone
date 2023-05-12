import React from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

const ScrollSlider = (props) => {

  const scrollWrapper = document.getElementById(`scroll-wrapper${props.id}`);
  const scrollContent = document.getElementById(`scroll-content${props.id}`);
  const scrollRightButton = document.getElementById(`scroll-right-button${props.id}`);
  // const scrollLeftButton = document.getElementById(`scroll-left-button${props.id}`);

  const handleScrollRight = () => {

    scrollWrapper.scrollBy({
      left: 800,
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
      left: -800,
      behavior: 'smooth'
    })

    // const maxScrollLeft = scrollContent.scrollWidth - scrollContent.clientWidth
    // scrollLeftButton.style.display = scrollWrapper.scrollLeft >= maxScrollLeft ? 'none' : 'grid';
    // scrollLeftButton.style.placeItems = scrollWrapper.scrollLeft >= maxScrollLeft ? 'none' : 'center';
    
    // console.log(scrollLeftButton)
    // scrollLeftButton.style.display = scrollWrapper.scrollLeft >= 201 ? 'none' : 'block';
    // setscrollLeftPx(scrollWrapper.scrollWidth)
    // console.log(scrollWrapper.scrollLeft, maxScrollLeft)
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
