import React from 'react';
import PropTypes from 'prop-types';

const Player = props => {
    const {player, showGamesPlayed} = props;

    return (
        <li>{`${player.firstName} - (${player.username}) - Games Played: ${showGamesPlayed ? player.gamesPlayed : '*'}`}</li>
    );
};

Player.propTypes = {
    player: PropTypes.object.isRequired,
    showGamesPlayed: PropTypes.bool.isRequired
};

export default Player;