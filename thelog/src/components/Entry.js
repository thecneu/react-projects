import React from 'react';

const Entry = (props) => (
    <li>
        <span><b>Time:</b> {props.time}</span>
        <span><b>Distance:</b> {props.distance}</span>
        <span><b>Calories:</b> {props.calories}</span>
    </li>
);

export default Entry;
