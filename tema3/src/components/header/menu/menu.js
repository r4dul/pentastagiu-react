import React, {Component} from 'react';
import './menu.css';
import MenuItem from './menu-item';

class Menu extends Component {
    render(){
        return(
            <nav>
                <ul>
                    <MenuItem item="Home" />
                    <MenuItem item="About" />
                    <MenuItem item="Contact" />
                </ul>
            </nav>
        )
    }
}

export default Menu;