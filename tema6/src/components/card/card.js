import React from 'react';
import PropTypes from 'prop-types';
import './card.css';
import { withStyles } from '@material-ui/core/styles';
import {Card, CardMedia, CardContent, Button, CardActions, CardHeader} from '@material-ui/core';

const styles = {
    card: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
    contentCard: {
        width: '300px',
        display: 'inline-block',
        boxShadow: '0 1px 2px 0 rgba(0,0,0,.15)',
        margin: '20px',
        position: 'relative',
        marginBottom: '50px',
        padding: '20px',
        transition: 'all .2s ease-in-out',
        '&:hover':{
            boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
        },
    },
  };

class CardProduct extends React.PureComponent {
    render() {
        const props = this.props;
        console.log('render Card', props.id);
        const id= props.id;
        return (
        <Card className={this.props.classes.contentCard}>
        <CardHeader
          title={props.name}
          subheader="February 2019"
        />
        <CardMedia
        className = {this.props.classes.media}
          image={props.photoUrl}
          title="Paella dish"
        />
        <CardContent>
        <span>{props.description}</span>
        <h5>Price {props.unitPrice} EUR</h5>
        <CardActions>
        <Button size="small" color="primary" onClick={() =>props.handleClick(id)}>
          Edit
        </Button>
        <Button size="small" color="primary" onClick={() =>props.deleteProduct(id)}>
          Delete
        </Button>
      </CardActions>
          </CardContent>
      </Card>
        )
    }
}
CardProduct.propTypes={
    name: PropTypes.string,
    handleClick: PropTypes.func,
    deleteProduct: PropTypes.func,
}
export default withStyles(styles)(CardProduct);