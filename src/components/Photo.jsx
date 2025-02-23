import { React } from 'react';
import PropTypes from 'prop-types';


function Photo({server, id, secret, desc}) {

    return (
            <li>
                <img src={`https://live.staticflickr.com/${server}/${id}_${secret}.jpg`} alt={`${desc}`} />
            </li>
    )
}

Photo.propTypes = {
    server: PropTypes.number, 
    id:PropTypes.number, 
    secret:PropTypes.number, 
    desc: PropTypes.number
}

export default Photo;
