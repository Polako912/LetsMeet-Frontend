import React, {Component} from 'react';
import './App.css';
import Routes from './containers/Routes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state =
      {
        isAuthenticated: false
      };
  }

  userHasAuthenticated = authenticated => {
  this.setState({isAuthenticated: authenticated});
}

render()
{
  const childProps = {
    isAuthenticated: this.state.isAuthenticated,
    userHasAuthenticated: this.userHasAuthenticated,
  };
  return (
    <div>

    <Routes/>
    </div>
);
}
}

export default App;
