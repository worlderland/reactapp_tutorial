import React from 'react';
import Header from './components/Header'
import Content from './components/Content';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "Content a component and a prop setup in app.js..."
    }
  }
  
  render() {
    return (
      <div>
        <Header headerProp="Header from Prop" />
        <Content contentProp={this.state.content} />
      </div>
    );
  }
}

export default App;