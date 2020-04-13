import React from 'react';
import './App.css';
import Saved from './pages/Saved.js';
import Search from './pages/SearchPage.js';
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
<Router>
      <div>
        <NavBar />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/saved">
            <Saved />
          </Route>
          <Route path="/">
            <Search />
          </Route>
        </Switch>
      </div>
    </Router>

    
  );
}


export default App;
