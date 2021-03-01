import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import './Cricketers.css';

// players-list of 15 players in cards format with name, image & salary mentioned

const Cricketers = (props) => {
    const { image, name, country, salary } = props.cricketer;
    return (
        <div className="cricketer-info">
            <img src={image} alt="" />
            <h2>{name}</h2>
            <p>Country: {country}</p>
            <p>Salary: ${salary}</p>
            {/* button to select the players & the use of font awesome icon */}
            <button className="select-btn" onClick={() => props.handleSelectButton(props.cricketer)} ><FontAwesomeIcon icon={faCheck} />Select</button>
        </div>
    );
};

export default Cricketers;