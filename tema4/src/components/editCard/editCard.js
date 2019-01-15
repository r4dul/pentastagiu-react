import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './editCard.css';
import App from '../../App';


class EditCard extends Component {
    constructor(props){
        super(props);
        this.onNameChange = this.onNameChange.bind(this);
        this.title = this.props.name;
        this.description = this.props.description;
        this.price = this.props.unitPrice;
        this.edit = true;
        //this.handleClick = this.handleClick.bind(this);
        console.log(this.price + " acesta este pretul")
        console.log(this.state)
    }
    componentDidMount = async () => {
        const response = await fetch('/products/' + this.props.id);
        const data = await response.json();
        this.setState({
          allData: data,
        });
        console.log("this state all data")
        console.log(this.state.allData)
    }



    onNameChange(event){
        const name = event.target.value;
        this.setState(prevState => {
          prevState.allData.name = name;
          return prevState;
        })
        this.title= name;
        console.log(event.target.value);
        console.log(this.state.allData.name);
        console.log("asta e stateul");
        console.log(this.state)
    }

    onPriceChange(event) {
        const price = event.target.value;
        this.setState(prevState => {
            prevState.allData.price = price;
            return prevState;
        })
        this.price = price;
        console.log(this.state.allData)
    }

    onDescriptionChange(event) {
        const description = event.target.value;
        this.setState(prevState => {
            prevState.allData.description = description;
            return prevState;
        })
        this.description = description;
        console.log(this.state.allData)
    }

    componentDidMount() {
        console.log("this was the state" + this.state.unitPrice);
    }
    saveData(){
        this.setState.setEditMode = false;
       console.log("daaaaaaa");
       console.log(this.state.allData.name);
       console.log(this);
       this.edit = false;
       console.log(this.edit + "asta a fost edit")
       this.forceUpdate();
       //this.setState({ state: this.state });
    }
    
    render(){
    //const props = this.props;
    //const name = this.state.allData;
    if (this.edit){
    return(
        <div className="editForm">
            <label> Title: </label><input value={this.title} type="text" onChange={this.onNameChange.bind(this)} /><br></br>
            <label>Price: </label><input value={this.price} type="text" onChange={this.onPriceChange.bind(this)}/><br></br>
            <label>Description: </label><input value={this.description} type="text" onChange={this.onDescriptionChange.bind(this)}/>
            <button onClick={this.saveData.bind(this)}>Save</button>
        </div>
    )} else {
        return <App />
    }
}
}   

EditCard.propTypes={
    name: PropTypes.string,
    onNameChange: PropTypes.func,
    saveData: PropTypes.func,
    onDescriptionChange: PropTypes.func,
    onPriceChange: PropTypes.func,
}
export default EditCard;