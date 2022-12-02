import React from 'react'
import { PureComponent } from 'react';
import Menu from './Menu';
import Footer from './Footer';

import DialogActions from '@material-ui/core/DialogActions'
import AddIcon from '@material-ui/icons/Add';
import axios from 'axios';
import InformationTableau  from './TableauView'
import { TextField } from '@material-ui/core'
import VisibilityIcon from '@material-ui/icons/Visibility';
//le modal formulaire
 import FormAdd from'./TableauForm';
 import Button from '../button/button'
 import Swal from 'sweetalert2';
 import Utilisateur from '../loginUsersInfo/usersConnected'
 //import Swal from 'sweetalert';
 import PrintIcon from '@material-ui/icons/Print'
 import jsPDF from'jspdf'
 import 'jspdf-autotable'

class Acceuil extends PureComponent {

  state = {
    formadd : false, 
    tableauview: false,
    listealltableau: '', 
    tableauinfo : '',
    opentableauform:false,
    searchtable:'',
    total: 0 
  }
  
  //all_base_de_donnee
  componentDidMount(){
    let donnee = {searchtable: this.state.searchtable}
    this.allTableau(donnee);
  }
  
  allTableau = async () => {
  let axiosresponse = await axios.get('http://localhost:3005/all_tableau');
  let listealltableau = await axiosresponse.data;
  
  if(listealltableau){
    this.setState({
      listealltableau,
      searchtable:''
    })
  }
  }
  addtableau = () => {
    if (Utilisateur.admin === true) {
        this.setState({
          formadd: true
        })
    }
    else {
        Swal({
            title: 'Erreur',
            text: "Droit d'administrateur requis pour cette action",
            icon: 'error'
        })
    }
}

searchtabledb = async (e) => {
  console.log("recherche d'une tableau")
    this.setState({
        searchtable: e.target.value
    })
    //valeur input de recherche
    const data = {search: e.target.value};

    let searchtable = await axios.post('http://localhost:3005/tablesearch', data);
    let listealltableau = await searchtable.data;
if(listealltableau && listealltableau.resultat < 1){
    Swal.fire({
        title: 'Recherche',
        icon: 'info',
        text: "Aucun resultat trouve dans la base de donnee",
        timer: 1500,
        confirmButtonText: 'Fermer',
        showCloseButton: true,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
}
this.setState({
    //listealltableau,
    listealltableau: listealltableau.resultat,
    //total: listealltableau.totalrecette[0].total
    total: listealltableau.totalrecette[0].total
})
}
  
  tableauformclose = ()=> {
  console.log("fermeture d'une modal")
  this.setState({
    formadd: false
  })
  }
  
  selecttableau = (parcour) => {
  this.setState({
      tableauinfo: parcour,
      opentableauform: true
  })
  }
  close_dialog_info = () => {
  this.setState({
    opentableauform: false,
  
  })
  }

    render() {
      const alltableau = this.state.listealltableau
      //let total = (this.state.total === null) ? 0 : this.state.total
      let total = this.state.total
      if(alltableau !== ''){  
        return ( 
        <div className="col-lg-12 grid-margin stretch-card">     
              <Menu />
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">TABLEAU DE BORD DE L'APMF</h4>
                  <TextField name="search" value={this.state.searchtable} onChange={this.searchtabledb} placeholder='Votre recherche soit Pilote
                     pour trouver la pourcentage etat avancement' id="search" label="Information de tableau de bord" fullWidth={true} /><br/><br/>
                <div class="table-responsive pt-3">
            <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th hidden >idTab</th>
                            <th>Identification</th>
                            <th>Activités</th>
                            <th>Pilote</th>
                            <th>Type</th>
                            <th>Date debut</th>
                            <th>Date fin</th>
                            <th>Trim</th>
                            <th>Dernières informations</th>
                            <th>Progression</th>
                            <th>Pourcentage</th>

                            <th>Afficher</th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                Object.keys(alltableau).map((parcour) => {
                                  let dDebut = new Date(alltableau[parcour].dateDebTable);
                                  //jours
                                  let joursDebut = ("0" + dDebut.getDate()).slice(-2);
                                  let moisDebut = dDebut.getMonth() + 1;
                                  if(moisDebut === 1) moisDebut = "Janvier";
                                  else if(moisDebut === 2) moisDebut = "Fevrier";
                                  else if(moisDebut === 3) moisDebut = "Mars";
                                  else if(moisDebut === 4) moisDebut = "Avril";
                                  else if(moisDebut === 5) moisDebut = "Mai";
                                  else if(moisDebut === 6) moisDebut = "Juin";
                                  else if(moisDebut === 7) moisDebut = "Juillet";
                                  else if(moisDebut === 8) moisDebut = "Aout";
                                  else if(moisDebut === 9) moisDebut = "Septempbre";
                                  else if(moisDebut === 10) moisDebut = "Octobre";
                                  else if(moisDebut === 11) moisDebut = "Novembre";
                                  else moisDebut = "Decembre";
                                  let yearDebut = dDebut.getFullYear();

                                  let dFin = new Date(alltableau[parcour].dateFiTable);
                                  //jours
                                  let joursFin = ("0" + dFin.getDate()).slice(-2);
                                  let moisFin = dFin.getMonth() + 1;
                                  if(moisFin === 1) moisFin = "Janvier";
                                  else if(moisFin === 2) moisFin = "Fevrier";
                                  else if(moisFin === 3) moisFin = "Mars";
                                  else if(moisFin === 4) moisFin = "Avril";
                                  else if(moisFin === 5) moisFin = "Mai";
                                  else if(moisFin === 6) moisFin = "Juin";
                                  else if(moisFin === 7) moisFin = "Juillet";
                                  else if(moisFin === 8) moisFin = "Aout";
                                  else if(moisFin === 9) moisFin = "Septempbre";
                                  else if(moisFin === 10) moisFin = "Octobre";
                                  else if(moisFin === 11) moisFin = "Novembre";
                                  else moisFin = "Decembre";
                                  let yearFin = dFin.getFullYear();

                                    return <tr>
                                        <td hidden>{alltableau[parcour].idTab}</td>
                                        <td>{alltableau[parcour].idTable}</td>
                                        <td>{alltableau[parcour].activiteTable}</td>
                                        <td>{alltableau[parcour].piloteTable}</td>
                                        <td>{alltableau[parcour].typeTable}</td>
                                        <td>{joursDebut} {moisDebut} {yearDebut}</td>
                                        <td>{joursFin} {moisFin} {yearFin}</td>
                                        <td>{alltableau[parcour].trimTable}</td>
                                        <td>{alltableau[parcour].informationTable}</td>
                                        <td>{alltableau[parcour].progressionTable}</td>
                                        <td>{alltableau[parcour].pourcentageTable}%</td>
                                        <td><Button color='primary' function={() => this.selecttableau(alltableau[parcour])} name_of_btn="Voir" icon={<VisibilityIcon />}  /></td>
                                    </tr>
                                    })
                                }
                                <tr>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td>Etat d'avancement:</td>
                                  <td>{total} %</td>
                                </tr>
                      </tbody>
                            <DialogActions>
                                <Button color='green'  function={this.addtableau} name_of_btn="Ajouter" icon={<AddIcon />}/>
                            </DialogActions>
            </table>
                <FormAdd opentableauform={this.state.formadd} refresh_add={this.allTableau} closeaddform={this.tableauformclose} />
                <InformationTableau tableauinfo={this.state.opentableauform} refresh={this.allTableau} information_tableau={this.state.tableauinfo} close_dialog_info={this.close_dialog_info} />
                <Footer />
          </div>
          </div>
          </div>
      </div>               
         ) 
        }else {
          return(
            <div className='container'>
              <Menu />
            </div>
          )
        }
         }
      }
export default Acceuil

