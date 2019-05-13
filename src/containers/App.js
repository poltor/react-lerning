import React, { Component } from 'react';
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom';

import routes from '../routes';
import Menu from '../components/Menu';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Menu />

          <Switch>
            {routes.map((route, i) => (
              <Route
                key={i.toString()}
                {...route}
              />
            ))}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }

}


export default App;
