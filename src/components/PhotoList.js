import React, { Component } from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

class PhotoList extends Component{ 
    render(){
      const results = this.props.data;
      let photos = results.map(photo => 
        <Photo 
          farm={photo.farm}
          key={photo.id}
          server={photo.server}
          secret={photo.secret}
          id={photo.id}

        />
      );

      return (
        <div className="photo-container">
          <ul>
            <h2>Results</h2>
          
              {photos}
              <NotFound />
   
          </ul>
        </div>
    );
  }
}
export default PhotoList;