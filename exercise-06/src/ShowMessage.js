import React from 'react';
import PropTypes from 'prop-types';

const ShowMessage = props => {
    const { show, message} = props;
    let element = '';

    if(show) {
        element = (<p className='error'>{message}</p>);
    }

    return element;
};

ShowMessage.propTypes = {
    message: PropTypes.string.isRequired,
    show: PropTypes.bool.isRequired
};

export default ShowMessage;