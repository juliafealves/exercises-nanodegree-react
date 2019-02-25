import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Chat from "./Chat";

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/


class App extends Component {
    state = {
        users: [
            { username: 'Amy' },
            { username: 'John' }
        ]
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">ReactND - Coding Practice</h1>
                </header>
                <div className="container">
                    {this.state.users.map(user => <Chat key={user.name} user={user}/>)}
                </div>
            </div>
        );
    }
}

export default App;
