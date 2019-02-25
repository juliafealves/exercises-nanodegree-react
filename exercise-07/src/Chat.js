import React, {Component} from 'react';
import PropTyes from 'prop-types';
import History from "./History";
import NewMessage from "./NewMessage";

class Chat extends Component {

    static propTypes = {
        user: PropTyes.object.isRequired
    };

    state = {
        messages: [
            {username: 'Amy', text: 'Hi, Jon!'},
            {username: 'Amy', text: 'How are you?'},
            {username: 'John', text: 'Hi, Amy! Good, you?'},
        ]
    };

    sendMessage = text => {
        const message = {
            username: this.props.user.username,
            text: text
        };

        this.setState(currentState => ({
            messages: [...currentState.messages, message]
        }));
    };

    render() {
        const {user} = this.props;

        return (
            <div className="chat-window">
                <h2>Super Awesome Chat</h2>
                <div className="name sender">{user.username}</div>
                <History user={user} messages={this.state.messages}/>
                <NewMessage onSendMessage={this.sendMessage}/>
            </div>
        );
    }
}

export default Chat;