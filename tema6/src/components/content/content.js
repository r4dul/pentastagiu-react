import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';
import './content.css';

class Content extends Component {
    render() {
        return(
          <div className="content">
              {this.props.allData.map(item =>
                      <Card key={item.id} {...item} deleteProduct={this.props.deleteProduct} handleClick={this.props.handleClick} product={this.props.product}/>)}
          </div>
        )
    }
}
Content.propTypes = {
    name: PropTypes.string.isRequired,
    handleClick: PropTypes.func,
    handleChangeTitle: PropTypes.func,
    title: PropTypes.string,
    allData: PropTypes.any,
    product: PropTypes.any,
    deleteProduct: PropTypes.func,
}
export default Content;