- [x] Make a template component
- [x] npm install stuff
- [x] bring in css from hero assignment to display images as cards
- [x] add some test images to gallery.data to work with display


- [x] 3 Components
    - [x] APP.js
    - [x] contains STATE
        - [x] empty array to put in data from gallery.data
        - [x] send state / array to GalleryList as props
    - [x] componentDidMount calls getImages function
        - [x] getImages has the axios.get route, grabbing the stuff stored in gallery.data
    - [x] there should also be a PUT route here that connects to the one in gallery.router
        - [x] this PUT route should be passed a prop function down to the GalleryItem child
             for the 'like' button
    - [x] GalleryList.js
        - [x] use props from app.js with a .map() to iterate over array
        - [x] send each iteration to GalleryItem component as props
    - [x] GalleryItem.js
        - [x] using the props from GalleryList I will display just the image from the item
        - [x] conditonal render the item description on button click
            - [x] I think this can be done with a local state inside this component
                - []x state: {isClicked: false}
                - [x] inside the img tag have an onClick={this.toggleDescription}
        - [x] display should have a like button underneath the image
            - [x] with a spot to display the value attached to the image as likeCount