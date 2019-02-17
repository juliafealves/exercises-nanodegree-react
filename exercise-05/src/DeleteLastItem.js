import React from 'react';
import PropTypes from 'prop-types';

const DeleteLastItem = props => {
    const { onDeleteLastItem, noItemsFound } = props;
    
    return (
        <button 
            onClick={() => onDeleteLastItem()} 
            disabled={noItemsFound}>
            Delete Last Item
        </button>
    );
}

DeleteLastItem.propTypes = {
    onDeleteLastItem: PropTypes.func.isRequired,
    noItemsFound: PropTypes.bool.isRequired
}

export default DeleteLastItem;