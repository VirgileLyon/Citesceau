import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import NewProjet from './pages/NewProjet/NewProjet';
import VueEnsemble from './pages/VueEnsemble/VueEnsemble';
import Projet from './pages/Projet/Projet';
import Profil from './pages/Profil/Profil';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/NewProjet" component={NewProjet} />
          <Route path="/VueEnsemble" component={VueEnsemble} />
          <Route path="/Projet" component={Projet} />
          <Route path="/Profil" component={Profil} />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
