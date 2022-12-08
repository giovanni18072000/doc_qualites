import { PureComponent } from 'react';
import Menu from '../navigation/Menu';
import Footer from '../navigation/Footer'
import DialogActions from '@material-ui/core/DialogActions'
import AddIcon from '@material-ui/icons/Add';
import axios from 'axios';
import InformationAttribution  from './AttributionView'
import VisibilityIcon from '@material-ui/icons/Visibility';
//le modal formulaire
 import FormAdd from'./AttributionsForm';
 import Button from '../button/button'
 import Utilisateur from '../loginUsersInfo/usersConnected'
 import Swal from 'sweetalert';
 import 'jspdf-autotable'
 import PrintIcon from '@material-ui/icons/Print'
 import jsPDF from'jspdf'
 import 'jspdf-autotable'
// import Pagination from '@mui/material/Pagination';
// import Stack from '@mui/material/Stack';
 


class Attribution extends PureComponent {

    state = {
        formadd : false, 
        attribuview: false,
        listeallattribu: '', 
        attribuinfo : '',
        openattribuform:false
    }

    //all_base_de_donnee
    componentDidMount(){
      this.allAttribu();
    }

    allAttribu = async () => {
      let axiosresponse = await axios.get('http://localhost:3005/all_attribution');
      let listeallattribu = await axiosresponse.data;
      
      if(listeallattribu){
        this.setState({
          listeallattribu,
        })
      }
    }

    addattribu = () => {
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

  attribuformclose = ()=> {
      console.log("fermeture d'une modal")
      this.setState({
        formadd: false
      })
    }

  selectattribu = (parcour) => {
      this.setState({
          attribuinfo: parcour,
          openattribuform: true
      })
  }
  close_dialog_info = () => {
      this.setState({
        openattribuform: false,

      })
  }



  // columns = [
  //   {
  //     name:"Numero",
  //     selector: (row) => row.numAttr
  //   },
  //   {
  //     name:"Nom",
  //     selector: (row) => row.nomAttr
  //   },
  
  //   {
  //     name:"Prenom",
  //     selector: (row) => row.prenomAttr
  //   },
  //   {
  //     name:"Date",
  //     selector: (row) => row.dateAttr
  //   },
  //   {
  //     name:"Poste",
  //     selector: (row) => row.posteAttr
  //   },
  //   {
  //     name:"Missions",
  //     selector: (row) => row.missionsAttr
  //   },
  //   {
  //     name:"Activites",
  //     selector: (row) => row.activiteAttr
  //   },
  //   {
  //     name:"Superieurs",
  //     selector: (row) => row.superieurAttr
  //   },
  //   {
  //     name:"Diplomes",
  //     selector: (row) => row.diplomeAttr
  //   },
  //   {
  //     name:"Autre Competence",
  //     selector: (row) => row.autreCompAttr
  //   },
  // ]



  // columns = [
  //   // {
  //   //   title:"Numero",
  //   //   field: "numero",
  //   // },
  //   // {
  //   //   title:"Nom",
  //   //   field: "nom",
  //   // },
  
  //   // {
  //   //   title:"Prenom",
  //   //   field: prenomAttr
  //   // },
  //   // {
  //   //   title:"Date",
  //   //   field: dateAttr
  //   // },
  //   // {
  //   //   title:"Poste",
  //   //   field: posteAttr
  //   // },
  //   // {
  //   //   title:"Missions",
  //   //   field: missionsAttr
  //   // },
  //   // {
  //   //   title:"Activites",
  //   //   field: activiteAttr
  //   // },
  //   // {
  //   //   title:"Superieurs",
  //   //   field: superieurAttr
  //   // },
  //   // {
  //   //   title:"Diplomes",
  //   //   field: diplomeAttr
  //   // },
  //   // {
  //   //   title:"Autre Competence",
  //   //   field: autreCompAttr
  //   // },
  // ]




   downloadPdf = () => {
    const doc = new jsPDF()
    doc.text("ATTRIBUTION EN PDF", 20, 10)
    doc.autoTable({
      html:"#table",
      theme: "grid",
    //   columnStyles: {
    //     0: {halign: 'left', cellWidth: 10,},
    //     1: {halign: 'left', cellWidth: 20,},
    //     2: {halign: 'left', cellWidth: 20,},
    //     3: {halign: 'left', cellWidth: 20,},
    //     4: {halign: 'left', cellWidth: 20,},
    //     5: {halign: 'left', cellWidth: 20,},
    //     6: {halign: 'left', cellWidth: 20,},
    //     7: {halign: 'left', cellWidth: 20,},
    //     8: {halign: 'left', cellWidth: 20,},
    //     9: {halign: 'left', cellWidth: 20,},
    //     10: {halign: 'left', cellWidth: 0,},
    // },
    // split overflowing columns into pages
    horizontalPageBreak: true,
    // repeat this column in split pages
    horizontalPageBreakRepeat: 0,
        //columns: columns.map(col => ({ ...col, dataKey: col.field })),
      // body: allAttribu
        //head : [['Numero', 'Nom', 'Prenom', 'Date', 'Poste', 'Missions', 'Activites', 'Superieurs', 'Diplomes', 'Autre Competence']],
        //body: [[]]
    })
    doc.save('attribution.pdf')
  }

    render() {
      const allattribu = this.state.listeallattribu
      if(allattribu !== ''){  
        return ( 
        <div className="col-lg-12 grid-margin stretch-card">     
              <Menu />
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Fiche de Poste</h4>
                <div class="table-responsive pt-3">
                 <center>
                    <Button color='green' 
                        //columns={columns} 
                        //data={allAttribu}
                        function={this.downloadPdf}
                        title="PDF Tableau de bord" 
                        icon={<PrintIcon />}
                        name_of_btn="Attribution en PDF"
                    /><br/><br/>
                </center>
            <table className="table table-bordered" id='table'> 
                        <thead>
                        <tr>
                            <th hidden >idAttr</th>
                            <th>Matricule</th>
                            <th>Nom</th>
                            <th>Prenom</th>
                            <th>Date entrée APMF</th>
                            <th>Poste</th>
                            <th>Missions</th>
                            <th>Activités Principale</th>
                            <th>Supérieur Hierarchie</th>
                            <th>Diplôme</th>
                            <th>Autres compétences</th>

                            <th>Afficher</th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                Object.keys(allattribu).map((parcour) => {
                                  let d = new Date(allattribu[parcour].dateAttr);
                                  //jours
                                  let jours = ("0" + d.getDate()).slice(-2);
                                  let mois = d.getMonth() + 1;
                                  if(mois === 1) mois = "Janvier";
                                  else if(mois === 2) mois = "Fevrier";
                                  else if(mois === 3) mois = "Mars";
                                  else if(mois === 4) mois = "Avril";
                                  else if(mois === 5) mois = "Mai";
                                  else if(mois === 6) mois = "Juin";
                                  else if(mois === 7) mois = "Juillet";
                                  else if(mois === 8) mois = "Aout";
                                  else if(mois === 9) mois = "Septempbre";
                                  else if(mois === 10) mois = "Octobre";
                                  else if(mois === 11) mois = "Novembre";
                                  else mois = "Decembre";
                                  let years = d.getFullYear();
                                    return <tr>
                                        <td hidden>{allattribu[parcour].idAttr}</td>
                                        <td>{allattribu[parcour].numAttr}</td>
                                        <td>{allattribu[parcour].nomAttr}</td>
                                        <td>{allattribu[parcour].prenomAttr}</td>
                                        <td>{jours} {mois} {years}</td>
                                        <td>{allattribu[parcour].posteAttr}</td>
                                        <td>{allattribu[parcour].missionsAttr}</td>
                                        <td>{allattribu[parcour].activiteAttr}</td>
                                        <td>{allattribu[parcour].superieurAttr}</td>
                                        <td>{allattribu[parcour].diplomeAttr}</td>
                                        <td>{allattribu[parcour].autreCompAttr}</td>
                                        <td><Button color='primary' function={() => this.selectattribu(allattribu[parcour])} name_of_btn="Voir" icon={<VisibilityIcon />}  /></td>
                                    </tr>
                                    })
                                }
                      </tbody>
                            <DialogActions>
                                <Button color='green'  function={this.addattribu} name_of_btn="Ajouter" icon={<AddIcon />} />
                            </DialogActions>
                            {/* <Stack spacing={1}> 
                              <center>
                                <Pagination count={100} variant="outlined" shape="rounded" />
                              </center>
                            </Stack> */}
                            
                          
                            
            </table>
            {/* <nav className='d-flex justify-content-center'>
              <ul className='pagination'>
                {
                  pages.map((page)=>(
                    <li className='page-link'>{page}</li>
                  ))
                }
              </ul>
            </nav> */}
                <FormAdd openattribuform={this.state.formadd} refresh_add={this.allAttribu} closeaddform={this.attribuformclose} />
                <InformationAttribution attribuinfo={this.state.openattribuform} refresh={this.allAttribu} information_attribution={this.state.attribuinfo} close_dialog_info={this.close_dialog_info} />                           
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

export default Attribution