import React, {Component} from 'react';
import './content.css';
import Card from './card/card';
import PropTypes from 'prop-types';
import Input from '../components/input/input';

class Content extends Component{
    render(){
        const callback = function(item) {
            return <Card 
            key={item.imdbID} 
            name={item.Title} 
            image={item.Poster} 
            year={item.Year} 
            handleClick={this.props.handleClick}
            displayInfo={this.props.displayInfo}
            />}
        console.log(this.props);
        return(
                <main>
                    <Input title={this.props.title} handleChangeTitle={this.props.handleChangeTitle}/>
                    {this.props.allData.map(callback, this)}
                </main>
        )
    }
}

Content.propTypes = {
    name: PropTypes.string.isRequired,
    handleClick: PropTypes.func,
    handleChangeTitle: PropTypes.func,
    title: PropTypes.string,
    image: PropTypes.string,
    year: PropTypes.string,
}

export default Content;