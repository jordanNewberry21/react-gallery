- [x] Make a template component
- [x] npm install stuff
- [x] bring in css from hero assignment to display images as cards
- [x] add some test images to gallery.data to work with display


- [] 3 Components
    - [] APP.js
    - [] contains STATE
        - [] empty array to put in data from gallery.data
        - [] send state / array to GalleryList as props
    - [] componentDidMount calls getImages function
        - [] getImages has the axios.get route, grabbing the stuff stored in gallery.data
    - [] there should also be a PUT route here that connects to the one in gallery.router
        - [] this PUT route should be passed a prop function down to the GalleryItem child
             for the 'like' button
    - [] GalleryList.js
        - [] use props from app.js with a .map() to iterate over array
        - [] send each iteration to GalleryItem component as props
    - [] GalleryItem.js
        - [] using the props from GalleryList I will display just the image from the item
        - [] conditonal render the item description on button click
            - [] I think this can be done with a local state inside this component
                - [] state: {isClicked: false}
                - [] inside the img tag have an onClick={this.toggleDescription}
        - [] display should have a like button underneath the image
            - [] with a spot to display the value attached to the image as likeCount