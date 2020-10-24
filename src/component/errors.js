import React from 'react';
import PropTypes from 'prop-types';

const MyErrors = ({ msg }) => (
  <div className="error-cont">
    <p className="error">{msg}</p>
  </div>
);
MyErrors.propTypes = {

  msg: PropTypes.string.isRequired,

};
export default MyErrors;
