import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Movie from './components/Movie'
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path='/' render={(props) => {
        return <Home title="Hello, welcome" history={props.history} />
      }} />
      <Route exact path='/movie/:movieID' component={Movie} />
    </Router>
  );

}
export default App;
