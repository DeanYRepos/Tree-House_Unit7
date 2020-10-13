import React from 'react';
import {  NavLink } from 'react-router-dom';


const Nav = () => (

    <nav className="main-nav">
      <ul className="main-nav">
        <li><NavLink to=' https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=a83e7138627859a29804fa403ca52856&tags=cats&format=rest'>Cats</NavLink></li>
        <li><NavLink to='https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=a83e7138627859a29804fa403ca52856&tags=Dogs&format=rest'>Dogs</NavLink></li>
        <li><NavLink to=' https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=a83e7138627859a29804fa403ca52856&tags=computers&format=rest'>Computers</NavLink></li>
      </ul>
  </nav>


)

export default Nav; 