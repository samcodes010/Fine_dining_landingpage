import React from 'react';

import './MenuItem.css';

const MenuItem = ({title, price, tags}) => (
  <div className='app__menuitem'>
    <dic className='app__menuitem-name' >
      <p className='p__cormornat' style={{color: '#dcca87'}}>{title}</p>
    </dic>

    <div className='app-menuitem-dash'></div>

    <dic className='app__menuitem-price' >
      <p className='p__cormornat' >{price}</p>
    </dic>

    <div className='app__menuitem-sub'>
      <p className='p__opensans' style={{color: '#aaa'}}>{tags}</p>
    </div>
  </div>
);

export default MenuItem;
