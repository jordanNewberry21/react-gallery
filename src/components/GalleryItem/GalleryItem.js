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
            <>
            <div onClick={this.toggleDescription} className="image" key={this.props.image.id}>
                {this.state.description ?
                    <p>{this.props.image.description}</p> :
            
                    <img src={this.props.image.path} alt={this.props.image.description}></img>
                 }
            </div>
            <div>
                <p>&#10084; {this.props.image.likes}</p>
                <button onClick={(event) => this.props.addLikes(event, this.props.image.id)}>&#10084;</button>
                
            </div>
            </>
        ) // end return
    } // end render
} // end class

export default GalleryItem;
