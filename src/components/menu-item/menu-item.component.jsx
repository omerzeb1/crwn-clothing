import React from 'react';

import './menu-item.style.scss';

const MenuItem = ({title,imageUrl,size}) => (
   <div className = {`${size} menu-item`}>
    <div 
    className="background-image"
    style ={{
        backgroundImage: `url(${imageUrl})`
    }} />
    <div className="content">
<hi className="title">{title.toUpperCase()}</hi>
        <span className="subtitle">SHOP NOW</span>
    </div>
</div>
    )

export default MenuItem;
