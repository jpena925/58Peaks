import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './Header'
import PeakList from './PeakList'
import MyPeakList from './MyPeakList'
import Planning from './Planning'
import Home from './Home'

function App() {

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/peaklist">
          <PeakList />
        </Route>
        <Route path="/mypeaks">
          <MyPeakList />
        </Route>
        <Route path="/planmyhike">
          <Planning />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
