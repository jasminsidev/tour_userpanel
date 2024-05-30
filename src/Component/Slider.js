import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import kedarnath from '../Image/kedarnath.jpg';
import kedarnath from '../Image/kedarnath.png';

import kailashmansarovar from '../Image/kailashmansarovar.jpg';
const Slider = () => {
  return (
    <div>
      <OwlCarousel loop nav items={1} autoplay="true" autoplayTimeout="5000" className='main-slider' >
        <div class='item'>
          <img src={kedarnath} style={{width:'100%'}}/>
        </div>
        <div class='item'>
          <img src={kailashmansarovar} style={{width:'100%'}} />
        </div>
      </OwlCarousel>
    </div>
  )
}
export default Slider