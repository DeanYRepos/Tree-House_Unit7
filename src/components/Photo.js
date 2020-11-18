import React from 'react';


const Photo = (props) => {
const url = `https://live.staticflickr.com/${props.data.server}/${props.data.id}_${props.data.secret}.jpg`;

  return (
    <li>
      <img src={url} alt="" />
    </li>

  

  );
}

export default Photo; 


