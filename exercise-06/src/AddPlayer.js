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
    };

    isEmpty = () => {
        const { firstName, lastName, username } = this.state.player;
        let isEmpty = false;

        if (firstName === '' || lastName === '' || username === '') {
            isEmpty = true;
        }

        return isEmpty;
    };

    isValid = () => !this.state.playerExists && !this.isEmpty();

    changeHandler = event => {
        console.log(event);
        const { name, value } = event.target;

        this.setState((currentPlayer) => {
            currentPlayer['player'][name] = value;

            return currentPlayer;
        });
    };

    render() {
        return (
            <div>
                <h2>Add New Player</h2>
                <form>
                    <input type='text' name='firstName' placeholder='First Name'
                        value={this.state.player.firstName} onChange={this.changeHandler}/>
                    <input type='text' name='lastName' placeholder='Last Name'
                        value={this.state.player.lastName} onChange={this.changeHandler}/>
                    <br/>
                    <input type='text' name='username' placeholder='User Name'
                        value={this.state.player.username} onChange={this.changeHandler} />
                    <input type='number' name='gamesPlayed' placeholder='Games Played'
                        value={this.state.player.gamesPlayed} onChange={this.changeHandler}/>
                    <br/>
                    <button type='submit' disabled={!this.isValid()}>Add Player</button>
                </form>
            </div>
        );
    }
}

export default AddPlayer;