import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShowMessage from "./ShowMessage";

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

    verifyUniqueUsername = username => {
        const players = this.props.players;
        let playerExists = false;

        let index = 0;

        while(index < players.length && !playerExists) {
            if(players[index].username === username) {
                playerExists = true;
            }

            index++;
        }

        return playerExists;
    };

    isEmpty = () => {
        const { firstName, lastName, username } = this.state.player;

        return firstName === '' || lastName === '' || username === '';
    };

    changeHandler = event => {
        const { name, value } = event.target;

        this.setState(currentState => ({
            ...currentState,
            player: {
                ...currentState.player,
                [ name ]: value
            }
        }));
    };

    addPlayer = event => {
        event.preventDefault();
        const playerExists = this.verifyUniqueUsername(this.state.player.username);

        if (!playerExists) {
            this.props.onAddPlayer(this.state.player);
        }

        this.setState( { playerExists });
    };

    render() {
        return (
            <div>
                <h2>Add New Player</h2>
                <ShowMessage
                    message='You cannot add a user that already exists.'
                    show={this.state.playerExists}/>
                <form onSubmit={this.addPlayer}>
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
                    <button type='submit' disabled={this.isEmpty()}>Add</button>
                </form>
            </div>
        );
    }
}

export default AddPlayer;