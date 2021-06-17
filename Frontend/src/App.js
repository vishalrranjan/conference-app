import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateRoom from './Room/CreateRoom';
import Room from './Room/Room';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={CreateRoom} />
        <Route path="/room/:roomID" component={Room} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
