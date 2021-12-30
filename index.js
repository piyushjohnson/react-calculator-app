import React, { Component } from 'react';
import { render } from 'react-dom';
import ButtonGroup from './containers/ButtonGroup';
import DashView from './containers/DashView';
import ActionButtons from './containers/ActionButtons';
import store from './store';
import { Provider } from 'react-redux';
import 'bulma/css/bulma.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <Provider store={store}>
        <div className="container is-fluid">
          <DashView />
          <ActionButtons />
          <ButtonGroup />
        </div>
      </Provider>
    );
  }
}

render(<App />, document.getElementById('root'));
