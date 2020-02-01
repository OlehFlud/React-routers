import React from 'react';
// const BrowserHistory = require('react-router/lib/BrowserHistory').default;

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect, Link
} from 'react-router-dom';

import HomePage from './containers/HomePage';
import DoggoPage from './containers/DoggoPage/DoggoPage';
import { Header } from './components/Header';
import NotFoundPage from './containers/NotFoundPage/NotFoundPage';
import NewRouter from "./components/New-router/New-router";
export default function App() {
  return (
    <Router>
      <Header
        className="App-header"
        showLogo
        greeting="Doggo app"
      />
      <Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>


        <Route path="/doggos">
          <DummyComponent/>
        </Route>

        <Route path="/router1">
          <Router1/>
        </Route>

        {/*<Route path="/router2" component={NewRouter1}>*/}
        {/*  <Router2/>*/}
        {/*</Route>*/}


        <Route path="/newRouter" >
          <Router11/>
        </Route>

        <Route path="/router2">
          <Router2/>
        </Route>

        <Route path="/doggo/:id">
          <DoggoPage/>
        </Route>

        <Route
          path="/not-found"
          render={routeProps => (
            <NotFoundPage {...routeProps}/>
          )}
        />

        <Redirect
          from="*"
          to={{
            pathname: '/not-found'
          }}
        />
      </Switch>
    </Router>
  );
}

function DummyComponent() {
  return <h2>Dummy Component here!</h2>;
}
function Router1() {
  return <h2>Router1!</h2>
}
function Router2() {
  return <h2>Router2!</h2>;
}

function Old() {
  return <h2>Old</h2>;
}
function Old1() {
  return <h2>Old1</h2>;
}
function Old2(props) {
    console.log(props);
    return <h2>Old2</h2>;
}

function Router11(props) {
return(
    <div>
      <Link to="/newRouter/old"  >New-router1</Link>
        //////////
      <Link to="/newRouter/old1"  >New-router2</Link>
     //////////////
      <Link to="/newRouter/old2"  >New-router3</Link>

      <Route path="/newRouter/old" component={Old}/>
      <Route path="/newRouter/old1" component={Old1}/>
      <Route path="/newRouter/old2" component={Old2}/>
    </div>
)
}
