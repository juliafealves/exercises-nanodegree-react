import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Player from "./Player";

class PlayerList extends Component{

    state = {
        showGamesPlayed: false
    };

    static propTypes = {
        players: PropTypes.array.isRequired
    };

    toogleGames = () => {
        this.setState(currentState => ({
            showGamesPlayed: !currentState.showGamesPlayed
        }));
    };

    render() {
        const {players} = this.props;

        return (
            <div>
                <button className="smallButton" onClick={this.toogleGames}>{`${this.state.showGamesPlayed ? 'Hide' : 'Show'}`} Games Played</button>
                <h2>Players</h2>
                <ul>
                    {players.map(player => <Player key={player.username} player={player} showGamesPlayed={this.state.showGamesPlayed}/>)}
                </ul>
            </div>
        );
    }
}

export default PlayerList;