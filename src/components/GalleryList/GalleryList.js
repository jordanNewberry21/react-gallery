import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'

class GalleryList extends Component{
    render(){
        return(
            <div>
                <h2>hello from GalleryList component</h2>
                <GalleryItem />
            </div>
        ) // end return
    } // end render
} // end class

export default GalleryList;
