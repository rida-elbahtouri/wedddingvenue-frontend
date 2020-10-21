import React from 'react'
import PropTypes from 'prop-types'
const Errors=({msg})=> {
    return (
        <div className="error-cont">
            <p className="error">{msg}</p>
        </div>
    )
}
Errors.propTypes = {

        msg: PropTypes.string.isRequired,
    
  };
export default Errors