import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./addCard.css";
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    margin: theme.spacing.unit,
  },
});

class AddCard extends PureComponent {
  render() {
    const props = this.props;
    return (
      <div className={props.classes.container}>
      <Input
        defaultValue="Name"
        className={props.classes.input}
        inputProps={{
          'aria-label': 'Description',
        }}
        onChange={this.props.nameChange}
      />

      <Input
        defaultValue="Description"
        className={props.classes.input}
        inputProps={{
          'aria-label': 'Description',
        }}
        onChange={this.props.descriptionChange}
      />

      <Input
        defaultValue="Price"
        className={props.classes.input}
        inputProps={{
          'aria-label': 'Description',
        }}
        onChange={this.props.addPrice}
      />  
      <Input
        defaultValue="Image(.jpg)"
        className={props.classes.input}
        inputProps={{
          'aria-label': 'Description',
        }}
        onChange={this.props.addImage}
      />  
        <button className="buttonClass" onClick={this.props.saveCard}>Save</button>
      </div>
    );
  }
}
AddCard.propTypes = {
  name: PropTypes.string,
  nameChange: PropTypes.func,
  descriptionChange: PropTypes.func,
  saveCard: PropTypes.func,
  addImage: PropTypes.func,
  addPrice: PropTypes.func,
};

export default withStyles(styles)(AddCard);
