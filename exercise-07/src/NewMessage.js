import React, {Component} from 'react';
import PropTypes from 'prop-types';

class NewMessage extends Component {
    static propTypes = {
        onSendMessage: PropTypes.func.isRequired
    };

    state = {
        text: ''
    };

    /**
     * If the user did not type anything, he/she should not be allowed to submit.
     *
     * @returns {boolean}
     */
    isDisabled = () => this.state.text === '';

    changeHandler = event => {
        this.setState({
            text: event.target.value
        });
    };

    sendMessage = event => {
        event.preventDefault();
        this.props.onSendMessage(this.state.text);
    };

    render() {
        return (
            <form className="input-group" onSubmit={this.sendMessage}>
                <input type="text" className="form-control" placeholder="Enter your message..."
                       onChange={this.changeHandler}/>
                <div className="input-group-append">
                    <button className="btn submit-button" disabled={this.isDisabled()}>
                        SEND
                    </button>
                </div>
            </form>
        );
    }
}

export default NewMessage;