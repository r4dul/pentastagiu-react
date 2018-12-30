import React from 'react';
import './menu.css';

function MenuItem(props){
    return(
            <li><a href={props.item}> {props.item}</a></li>)
}

export default MenuItem;