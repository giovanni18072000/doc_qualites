import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

export class ErrorPage extends Component {
render() {
    return (
  <div  className="col-lg-12 grid-margin stretch-card">
        <div class="container">
          <div class="content-wrapper col-lg-7 mx-auto text-white">
            <div class="row align-items-center d-flex flex-row">
                <h1 class="display-1 mb-0">505</h1>
              <div class="col-lg-6 error-page-divider text-lg-left pl-lg-7">
                <h2>Désolé!</h2>
                <h3 class="font-weight-light">Cette page n'existe pas.</h3>
              </div>
            </div>
            <div class="row mt-5">
              <div class="col-12 text-center mt-xl-2">
                <NavLink class="text-white font-weight-medium" to="/tableau">Veuillez retourner au Tableau de Board</NavLink>
              </div>
            </div>
            <div class="row mt-5">
              <div class="col-12 mt-xl-2">
                <p class="text-white font-weight-medium text-center">Copyright &copy; 2022   Développeur: Andoniaina Giovanni Elie.</p>
              </div>
            </div>
           </div>
       </div>
    </div>
        )
    }
}

export default ErrorPage
