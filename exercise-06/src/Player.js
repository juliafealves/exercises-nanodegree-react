import React from 'react';
import PropTypes from 'prop-types';

const Player = props => {
    const { player } = props;

    return (
        <li key={player.username}>{`${player.firstName} - (${player.username}) - Games Played: ${player.gamesPlayed}`}</li>
    );
};

Player.propTypes = {
    player: PropTypes.object.isRequired
};

export default Player;