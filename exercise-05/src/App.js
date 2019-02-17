import React from 'react';
import logo from './logo.svg';
import './App.css';
import CreateNewItem from './CreateNewItem';
import DeleteLastItem from './DeleteLastItem';
import ItemsList from './ItemsList';
class App extends React.Component {
  state = {
    items: []
  };

  addItem = item => {
    this.setState(oldState => ({ items: [...oldState.items, item] }));
  };

  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  noItemsFound = () => this.state.items.length === 0;

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
        <CreateNewItem
          onAddItem={this.addItem} />
        <DeleteLastItem
          onDeleteLastItem={this.deleteLastItem}
          noItemsFound={this.noItemsFound()} />
        <ItemsList items={this.state.items} />
      </div>
    );
  }
}

export default App;
