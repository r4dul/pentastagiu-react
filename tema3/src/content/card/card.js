import React from 'react';
import './card.css';
import PropTypes from 'prop-types';

function Card(props) {
    return(
        <div className="contentCard" onMouseOver={() => props.displayInfo(props.year)}>
            <h4>{props.name}</h4>
            <img src={props.image} alt={props.name} /><br />
            <button onClick={() => props.handleClick(props.name)}>Click name</button>
        </div>
    )
}

Card.propTypes = {
    name: PropTypes.string,
    handleClick: PropTypes.func,
    image: PropTypes.string,
    year: PropTypes.string,
}

export default Card;