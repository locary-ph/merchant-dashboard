import React from 'react';
import PropTypes from 'prop-types';

function ProductDetails(props) {
  const { product }= props.location.state;
  console.log(product)
  return (
    <div>
      Product details
    </div>
  );
}

ProductDetails.defaultProps = {};

ProductDetails.propTypes = {
};

export default ProductDetails;
