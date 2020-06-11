import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const RestaurantName = ({ restaurantName }) => {
  return restaurantName;
};

UserName.propTypes = {
  restaurantName: PropTypes.string,
};

const mapStateToProps = (state, ownProps) => ({
  restaurantName: state.restaurants[ownProps.id].name,
});

export default connect(mapStateToProps)(RestaurantName);
