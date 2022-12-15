import React, { Component } from 'react';
import Utilisateur from './loginUsersInfo/usersConnected';
import Apps from './Apps'
import { observer } from 'mobx-react';
import Login from './loginForm/loginForm';
import axios from 'axios';;

export class App extends Component {
  componentDidMount() {
    this.searchSession();
  }
  searchSession = async () => {
    try {
      let userConnected = await axios.post('http://localhost:3005/isLoggedIn');
      let response  = await userConnected.data;

      let admin = '';

      if (response && response.success === true) {
        if (response.admin === 0) {
          admin = false;
        }
        else {
          admin = true;
        }
        //ernregistrement des informations dans le usersInformation 
        // console.log(response)
        Utilisateur.loading = false;
        Utilisateur.isLoggedIn = true;
        Utilisateur.username = response.username;
        Utilisateur.admin = admin;
        Utilisateur.usersInformation = response.usersInformation;
        Utilisateur.id_users = response.usersInformation.id;
        Utilisateur.prenom_users = response.usersInformation.prenom_d_utilisateur;
        Utilisateur.email_users = response.usersInformation.email;
        Utilisateur.whatsapp = response.usersInformation.whatsapp;
        Utilisateur.password = response.usersInformation.password;
        Utilisateur.contact = response.usersInformation.contact;
        
      }
      else {
        Utilisateur.loading = false;
        Utilisateur.isLoggedIn = false;
      }
    }
    catch (e) {
      Utilisateur.loading = false;
      Utilisateur.isLoggedIn = false;
      console.log(e)
    }
  }
  render() {
    if (Utilisateur.loading) {
      return (
        <div className="app">
          <div className="container">
            Chargement ...
          </div>
        </div>
      )
    }
    else {
      if (Utilisateur.isLoggedIn ) {
        return (<Apps />)
      }
      return (<Login />)
    }
  }
}

export default observer(App)