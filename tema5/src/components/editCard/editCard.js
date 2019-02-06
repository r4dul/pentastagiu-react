import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./editCard.css";

class EditCard extends PureComponent {
  render() {
    return (
      <div className="content-card modal">
        <label>Name</label>
        <input
          value={this.props.product.name}
          name="name"
          type="text"
          onChange={this.props.onNameChange}
        /> <br />
        <label>Description</label>
        <input
          value={this.props.product.description}
          name="description"
          type="text"
          onChange={this.props.descriptionChange}
        />
        <br />
        <label>Price</label>
        <input
          value={this.props.product.unitPrice}
          name="price"
          type="text"
          onChange={this.props.editProductPrice}
        />
        <br />
        <label>Image</label>
        <input
          value={this.props.product.photoUrl}
          name="photoUrl"
          type="text"
          onChange={this.props.editProductImage}
        />
        <br />
        <button onClick={this.props.onSave}>Save</button>
      </div>
    );
  }
}
EditCard.propTypes = {
  name: PropTypes.string,
  onNameChange: PropTypes.func,
  descriptionChange: PropTypes.func,
  editProductPrice: PropTypes.func,
  editProductImage: PropTypes.func,
};
export default EditCard;
