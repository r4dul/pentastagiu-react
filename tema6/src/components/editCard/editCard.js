import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./editCard.css";
import { withStyles } from '@material-ui/core/styles';
import {Input} from '@material-ui/core/';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    margin: theme.spacing.unit,
  },
});

class EditCard extends PureComponent {
  render() {
    const props = this.props;
    return (
      <div className="content-card modal">
      <div className={props.classes.container}>
      <Input
      value={this.props.product.name}
        defaultValue='Name'
        className={props.classes.input}
        inputProps={{
          'aria-label': 'Description',
        }}
        onChange={this.props.onNameChange}
      />
<Input
        defaultValue='Description'
        value={this.props.product.description}
        className={props.classes.input}
        inputProps={{
          'aria-label': 'Description',
        }}
        onChange={this.props.descriptionChange}
      />

<Input
        defaultValue='Price'
        value={this.props.product.unitPrice}
        className={props.classes.input}
        inputProps={{
          'aria-label': 'Description',
        }}
        onChange={this.props.editProductPrice}
      />

<Input
        defaultValue='Image'
        value={this.props.product.photoUrl}
        className={props.classes.input}
        inputProps={{
          'aria-label': 'Description',
        }}
        onChange={this.props.editProductImage}
      />
     <button onClick={this.props.onSave}>Save</button>
        
        </div>
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
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EditCard);
