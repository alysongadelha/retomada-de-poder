import React from 'react';
import './assets/css/styles.css';
import Navbar from './components/NavBar/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Personagens from './components/Pages/Personagens';
import Npcs from './components/Pages/Npcs';
import Cidade from './components/Pages/Cidade';
import Mesa from './components/Pages/Mesa';
import Doe from './components/Pages/Doe';



function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/personagens' component={Personagens} />
        <Route path='/npcs' component={Npcs} />
        <Route path='/cidade' component={Cidade} />
        <Route path='/a-mesa' component={Mesa} />
        <Route path='/doacao' component={Doe} /> 
      </Switch>
    </Router>
  );
}

export default App;