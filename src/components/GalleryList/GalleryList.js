import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'

class GalleryList extends Component{
    render(){
        return(
            <div>
                <h2>hello from GalleryList component</h2>
                {/* using props from app.js to map over images */}
                {this.props.imageList.map(image => 
                <GalleryItem addLikes={this.props.addLikes} image={image} key={image.id}/>
                               )}
            </div>
        ) // end return
    } // end render
} // end class

export default GalleryList;
