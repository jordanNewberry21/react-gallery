import React, { Component } from 'react';

class GalleryItem extends Component{

    state = { // local state
        description: false
    }

    toggleDescription = () => { // toggle function for image description
        console.log('inside toggle description');
        this.setState({
            description: !this.state.description
        })
    }

    render(){
        return(
            <div onClick={this.toggleDescription} className="image" key={this.props.image.id}>
                <img src={this.props.image.path}></img>
            </div>
        ) // end return
    } // end render
} // end class

export default GalleryItem;
