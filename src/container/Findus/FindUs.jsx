import React from 'react';
import {images} from '../../constants';
import {SubHeading} from '../../components'

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wraper_info'>
      <SubHeading title="Contact" />
      <h1 className='app__header-h1'> Find Us</h1> 
      <div>
        <p className='p__opensans' style={{margin: '2rem 0'}}> Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG  </p>
        <p className='p__cormorant' style={{color: '#dcca87', margin: '2rem 0'}}> Opening Hours  </p>
        <p className='p__opensans' >Mon - Fri: 10:00 am - 02:00 am   </p> 
        <p className='p__opensans' style={{marginBottom: '2rem'}}>Sat - Sun: Sat - Sun: 10:00 am - 03:00 am     10:00 am - 03:00 am  </p> 
      </div>
      <button type='button ' className='custom__button'>Explore Menu</button>  
    </div>

    <div className='app__wrapper_img '>
      <img src={images.findus} alt='findus img'/>
    </div>
  </div>
);
export default FindUs;
