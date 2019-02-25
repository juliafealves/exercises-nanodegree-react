import React from 'react';
import PropTypes from 'prop-types';
import Player from "./Player";

const PlayerList = props => {
    const { players } = props;

    return (
        <div>
            <h2>Players</h2>
            <ul>
                {players.map(player => <Player player={player}/>)}
            </ul>
        </div>
    );
};

PlayerList.propTypes = {
    players: PropTypes.array.isRequired
};

export default PlayerList;