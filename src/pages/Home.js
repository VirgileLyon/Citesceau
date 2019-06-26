import React, { Component } from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1> Citoyen </h1>
        <Button color="primary" size="lg" className="PropositionProjet">Proposition Projet</Button>
        <Button color="primary" size="lg" className="ConsultationProjet">Consultation Projets</Button>
      </div>
    );
  }
}

export default Home;