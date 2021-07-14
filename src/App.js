import React from 'react';
import { Router, Route } from 'react-router'
import { useHistory } from 'react-router';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

class App extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

function Routes() {
  const history= useHistory()

    return (
      <Router history={history}>
        <Route path="/" component={App}>
          <Route path="home" component={Home} />
          <Route path="about" component={About} />
          <Route path="contact" component={Contact} />
        </Route>
      </Router>
    )
}

export default Routes