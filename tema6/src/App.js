import React, { Component } from 'react';
import Header from './components/header/header';
import Content from './components/content/content';
import EditCard from './components/editCard/editCard';
import AddCard from './components/addCard';
import './App.css';
import { connect } from "react-redux";
import { getProducts, setSaveProduct, setNameProduct, deleteProduct, setNameAddProduct, saveProduct, setDescriptionAddProduct, setProductPrice, setProductImage, onDescriptionChange } from './Redux/Actions/products';
import { startEditProduct, finishEditProduct } from './Redux/Actions/ui';

class App extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onSave = this.onSave.bind(this);
    this.deleteProduct=this.deleteProduct.bind(this);
    this.addCard=this.addCard.bind(this);
    this.nameChange=this.nameChange.bind(this);
    this.saveCard=this.saveCard.bind(this);
    this.descriptionChange=this.descriptionChange.bind(this);
    this.addPrice=this.addPrice.bind(this);
    this.addImage=this.addImage.bind(this);
    this.onDescriptionChange=this.onDescriptionChange.bind(this);
    this.state = {
      name: 'Bogdan',
      title: 'Super Bogdan',
      setEditMode: false,
      dataById: {},
      openAddCard: false,
    }
  }

  componentDidMount(){
    this.props._getAllProducts();
  }
  componentDidUpdate(){
    console.log(this.state.setEditMode)
  }
  handleClick(id) {
    this.props._startEditProduct(id);
  }
  onNameChange(event){
    const name = event.target.value;
    this.props._setNameProduct(name);
  }

  onDescriptionChange(event){
    this.props._setDescriptionProduct(event.target.value);
  }
  deleteProduct(id) {
    console.log(id);
    this.props._deleteProduct(id);
  }

  onSave() {
    this.props._setSaveProduct();
  }
  addCard(){
    this.setState({openAddCard: true});
  }
  nameChange(event) {
  console.log(event.target.value)
    this.props._setNameAddProduct(event.target.value);
  }
  descriptionChange(event){
    this.props._setDescriptionAddProduct(event.target.value);
  }
  saveCard(){
  this.setState({openAddCard: false});
  //this.props._hideAddProductForm();
  this.props._saveProduct();
  }
  addPrice(event) {
    this.props._setProductPrice(event.target.value);
  }
  addImage(event) {
    this.props._setProductImage(event.target.value);
  }
  
  render() {
    console.log(this.props)
    return (
      <div className="App">
      <Header />
        <button className="button-add" onClick={this.addCard}>AddCard</button>
        {this.state.openAddCard ? <AddCard nameChange={this.nameChange} addImage={this.addImage} addPrice={this.addPrice} saveCard={this.saveCard} descriptionChange={this.descriptionChange}/> : null}
      {
        this.props.ui.productEdit ? 
          <EditCard {...this.state.dataById} editProductImage={this.addImage} editProductPrice={this.addPrice} onNameChange={this.onNameChange} descriptionChange={this.descriptionChange} onSave={this.onSave} product={this.props.product}/> : 
          this.props.ui.showSpinner ? 
            <div className="loading-spinner"><div></div><div></div><div></div><div></div></div>
          : 
          <Content 
            name={this.state.name} 
            handleClick={this.handleClick} 
            allData={this.props.products}
            product={this.props.product} 
            title={this.state.title}
            deleteProduct={this.deleteProduct}
            handleChangeTitle={()=> {}}
          />
      }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products.products,
  ui: state.ui,
  product: state.products.product,
});
  
const mapDispatchToProps = (dispatch) => ({
    _getAllProducts: () => dispatch(getProducts()),
    _startEditProduct: (id) => dispatch(startEditProduct(id)),
    _finishEditProduct: () => dispatch(finishEditProduct()),
    _setSaveProduct: () => dispatch(setSaveProduct()),
    _setNameProduct: (name) => dispatch(setNameProduct(name)),
  _deleteProduct:(id) => dispatch(deleteProduct(id)),
  _setNameAddProduct:(id) => dispatch(setNameAddProduct(id)),
  _saveProduct:()=> dispatch(saveProduct()),
  _setDescriptionAddProduct:(description) => dispatch(setDescriptionAddProduct(description)),
  _setProductPrice:(price) => dispatch(setProductPrice(price)),
  _setProductImage:(photoUrl) => dispatch(setProductImage(photoUrl)),
  _onDescriptionChange:(description) => dispatch(onDescriptionChange(description)),
  });


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
