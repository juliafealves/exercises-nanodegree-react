import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import AddPlayer from './AddPlayer';
import PlayerList from "./PlayerList";

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
    state = {
        players: []
    };

    createPlayer = player => {
        this.setState(currentState => ({
            players: [
                ...currentState.players,
                player
            ]
        }));
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">ReactND - Coding Practice</h1>
                </header>

                <AddPlayer
                    players={this.state.players}
                    onAddPlayer={this.createPlayer}/>
                <hr/>
                <PlayerList players={this.state.players}/>
            </div>
        );
    }
}

export default App;
