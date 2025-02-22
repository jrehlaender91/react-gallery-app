import React from 'react';
import Photo from './Photo';

function PhotoList(props) {
    const results = props.data;
    let images;
    console.log(results)

    images = results.map(image => <Photo server={image.server} secret={image.secret} id={image.id} desc={image.title}/>);


    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                {images}
            </ul>
        </div>
    )
}

export default PhotoList;
