import React, { Component } from 'react';
import NavBar from '../NavBar';
import './Profil.css';

class Profil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
    };
  }

  componentWillMount() {
    this.setState({
      userInfo: {
        Image: 'https://firebasestorage.googleapis.com/v0/b/hackatown-645d6.appspot.com/o/Medias%2FProfiles%2FAragorn1024-1230603_140x140.jpg?alt=media&token=53a9dfbf-471c-44fd-92f3-dbf9c3aff7c4',
        Mail: 'Blu@gmail.com',
        Nom: 'Bla',
        Points: 100,
        Prénom: 'Ble',
        id: 'HcaWwmASLB13UTWSTDGp',
      },
    });
  }


  render() {
    const { userInfo } = this.state;
    return (
      <div>
        <h1 className="Profil">Profil</h1>
        <img className="ImageProfil" src="https://s3-eu-west-1.amazonaws.com/photos-kidygo/parents/profile-default/profil_homme.svg" alt="Profil" />
        <h2 className="NombrePoints">Nombre de points</h2>
        <h3 className="NombresPoints2">
          {userInfo.Points}
          {' '}
          points
        </h3>
        <h3 className="Votes">Votes</h3>
        <h4 className="Propositions">Proposition</h4>
        <NavBar />
      </div>
    );
  }
}

export default Profil;
