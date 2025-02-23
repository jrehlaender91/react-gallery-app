import { React } from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';

function PhotoList(props) {
    let counter = 0;
    let data = props.data;
    let images;
    
    images = data.map(image => {
        <Photo server={image.server} id={image.id} secret={image.secret} desc={image.desc}/>
        counter++;
    }); 
    

    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                {images}
            </ul>
        </div>
    )
}

PhotoList.propTypes = {
  data: PropTypes.object
}

export default PhotoList;
