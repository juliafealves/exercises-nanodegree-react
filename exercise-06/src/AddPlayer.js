import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddPlayer extends Component {

    static propTypes = {
        players: PropTypes.array.isRequired,
        onAddPlayer: PropTypes.func.isRequired
    };

    state = {
        player: {
            firstName: '',
            lastName: '',
            username: '',
            gamesPlayed: 0
        },
        playerExists: false
    }

    render() {
        return (
            <div>
                <h2>Add New Player</h2>
                <form>
                    <input type='text' placeholder='First Name'
                        value={this.state.player.firstName}/>
                    <input type='text' placeholder='Last Name'
                        value={this.state.player.lastName}/>
                    <br/>
                    <input type='text' placeholder='User Name'
                        value={this.state.player.username}/>
                    <input type='number' placeholder='Games Played'
                        value={this.state.player.gamesPlayed}/>
                    <br/>
                    <button type='submit' disabled={this.state.playerExists}>Add Player</button>
                </form>
            </div>
        );
    }
}

export default AddPlayer;