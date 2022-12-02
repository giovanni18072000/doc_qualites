import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
// import { Dialog, DialogContent, DialogTitle, TextField} from '@material-ui/core'
import Button from '../button/button'
import Utilisateur from '../loginUsersInfo/usersConnected'
// import { Button } from '@material-ui/core';
import axios from 'axios';
// import Footer from './Footer';

class Menu extends Component {

  logout = async () => {
    try {
        let logout = await axios.post('http://localhost:3005/logout');
        let response = await logout.data;

        if (response && response.success === true) {
            Utilisateur.loading = false;
            Utilisateur.isLoggedIn = false;
            Utilisateur.username = '';
            Utilisateur.admin = '';
            Utilisateur.usersInformation = {};
            Utilisateur.id_users = '';
            Utilisateur.prenom_users = '';
            Utilisateur.email_users = '';
            Utilisateur.whatsapp = '';
            Utilisateur.password = '';
            Utilisateur.contact = '';
        }
        else {
            Utilisateur.loading = false;
            Utilisateur.isLoggedIn = false;
        }
    }
    catch (e) { throw e }
}
  render() {
    return (
<div>       
   <div class="text-container">
   <nav class="navbar navbar-expand-md navbar-dark navbar-custom fixed-top">

        {/* <a class="navbar-brand logo-image" href="#"><img src="images/logo.svg" alt="alternative"/></a>  */}
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-awesome fas fa-bars"></span>
            <span class="navbar-toggler-awesome fas fa-times"></span>
        </button>

        <div class="text-center navbar-brand-wrapper  d-flex align-items-center justify-content-center ">
          {/* <a class="navbar-brand brand-logo mr-1" href="#"><img src="images/boat.Png" class="mr-1" alt="logo"/></a> </div> */}
          <a class="navbar-brand logo-image" href="#"><img src="../../images/logo2.PNG" alt='logo' style={{color:'black',height:'40px',width:'50px'}}/></a> </div>
        <div class="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <NavLink className="nav-link" to="/tableau">
                    <i class="icon-columns menu-icon"></i>
                      <span class="menu-title">Tableau Board</span>
                  </NavLink>
                </li>

                <li class="nav-item">
                  <NavLink className="nav-link" to="/attribution">
                    <i class="icon-columns menu-icon"></i>
                      <span class="menu-title">Attribution</span>
                  </NavLink>
                </li>

                <li class="nav-item">
                  <NavLink className="nav-link" to="/dos">
                    <i class="icon-columns menu-icon"></i>
                      <span class="menu-title">Dos</span>
                  </NavLink>
                </li>

                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle page-scroll"  id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">Outils de Formations</a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      
                        <NavLink className="nav-link" to="/formationSMQ">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">Formation SMQ</span>
                        </NavLink>
                        <div class="dropdown-items-divide-hr"></div>

                        <NavLink className="nav-link" to="/formationAudit">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">Forma Audit</span>
                        </NavLink>

                        <div class="dropdown-items-divide-hr"></div>

                        <NavLink className="nav-link" to="/etapeRealisation">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">Etape Realisation</span>
                        </NavLink>

                        <div class="dropdown-items-divide-hr"></div>

                        <NavLink className="nav-link" to="/cinqOne">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">5S1</span>
                        </NavLink>

                        <div class="dropdown-items-divide-hr"></div>

                        <NavLink className="nav-link" to="/cinqTwo">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">5S2</span>
                        </NavLink>

                        <div class="dropdown-items-divide-hr"></div>

                        <NavLink className="nav-link" to="/evaluation">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">Notation Evaluation</span>
                        </NavLink>
                    </div>
                </li>

                <li class="nav-item">
                  <NavLink className="nav-link" to="/evaluation">
                    <i class="icon-columns menu-icon"></i>
                      <span class="menu-title">Evaluation</span>
                  </NavLink>
                </li>

                <li class="nav-item">
                  <NavLink className="nav-link" to="/engagement">
                    <i class="icon-columns menu-icon"></i>
                      <span class="menu-title">Engagement</span>
                  </NavLink>
                </li>

                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle page-scroll"  id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">Procedures</a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      
                        <NavLink className="nav-link" to="/listeProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">Liste Procedures</span>
                        </NavLink>
                        <div class="dropdown-items-divide-hr"></div>

                        <NavLink className="nav-link" to="/procedures">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">Procedures</span>
                        </NavLink>
                        <div class="dropdown-items-divide-hr"></div>

                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">Manuel Procedure</span>
                        </NavLink>
                    </div>
                </li>
                         
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle page-scroll"  id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">Liste et Numéro de Docs</a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      
                        <NavLink className="nav-link" to="/listeInterne">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">Interne</span>
                        </NavLink>
                        <div class="dropdown-items-divide-hr"></div>

                        <NavLink className="nav-link" to="/listeExterne">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">Externe</span>
                        </NavLink>
                    </div>
                </li>
                
                <li class="nav-item">
                  <NavLink className="nav-link" to="/UsersInformation">
                    <i class="icon-columns menu-icon"></i>
                      <span class="menu-title">Utilisateur</span>
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink className="nav-link" to="/discussion">
                    <i class="icon-columns menu-icon"></i>
                      <span class="menu-title">Discussion</span>
                  </NavLink>
                </li>
                    <Button function={() => this.logout()}  name_of_btn="deconnexion">deconnexion</Button>                  
            </ul>
        </div>
    </nav>
    <header id="header" class="header">
        <div class="header-content">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="text-container">
                            <h1> <span id="js-rotating">L'AGENCE PORTUAIRE MARITIME ET FLUVIALE</span></h1>
                            <p class="p-heading p-large">Autorité de régulation L’APMF est un établissement public à caractère industriel et commercial (EPIC) créé par le décret N° 2003-659 du 04 Juin 2003, autonome sur le plan administratif, technique et financier, sous la tutelle budgétaire du Ministère chargé du budget, sous la tutelle comptable du Ministère chargé des Finances et sous la tutelle technique du Ministère chargé des Transports.  Elle est l'autorité chargée de mettre en application la politique générale de l'Etat selon les stratégies arrêtées par le Ministère chargé des Transports concernant le sous-secteur portuaire, maritime et fluvial.</p>
                            <a class="btn-solid-lg page-scroll" href="#intro">Système de Management de la Qualité</a>      
                        </div>
                    </div> 
                </div> 
            </div> 
        </div> 
    </header> 
    </div> 
  </div>
    )
  }
}
export default Menu