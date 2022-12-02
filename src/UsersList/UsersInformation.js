import React, { PureComponent } from 'react'
import { DialogTitle } from '@material-ui/core'
import VisibilityIcon from '@material-ui/icons/Visibility';
import DialogActions from '@material-ui/core/DialogActions'
import Swal from 'sweetalert';
import Utilisateur from '../loginUsersInfo/usersConnected'
import Slide from '@material-ui/core/Slide'
import Button from '../button/button'
import InformationUsers from './UsersInformationView'
import AddIcon from '@material-ui/icons/Add';
import FormAdd from './UsersAdd'
import Menu from '../navigation/Menu';
import axios from 'axios';
import Footer from '../navigation/Footer';

class UtilisateurApmf extends PureComponent {
    state = {
        form_add: false,
        info_users: false,
        utilisateur_all: [],
        users_info: '',
        info_dialog_users: false,
        n: 1
    }
    componentDidMount() {
        this.lister_all_users()
    }
    compteur = () => {
        this.setState({
            n: this.state.n + 1
        })
    }
    componentDidUpdate() {
    }
    lister_all_users = async () => {
        try {
            this.compteur()
            //console.log(this.state.n +"nnnnnnnnnnnnnnnn")
            let all_users = await axios.get('http://localhost:3005/all_users');
            //let response = await all_users.json()
            let response  = await all_users.data
            if (response) {
                this.setState({
                    utilisateur_all: response.utilisateur
                })
            }
        }
        catch (e) { throw e }
    }

    open_form_users = () => {
        if (Utilisateur.admin === true) {
            this.setState({
                form_add: true
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
    close_form_add = () => {
        this.setState({
            form_add: false
        })
    }
    select_user = (val) => {
        this.setState({
            users_info: val,
            info_dialog_users: true
        })
    }
    close_dialog_info = () => {
        this.setState({
            info_dialog_users: false,

        })
    }
    Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="down" ref={ref} {...props} />;
    });
    render() {
        let i = 0
        return (
            <div className="col-lg-12 grid-margin stretch-card">     
              <Menu />
                <div class="card">
                    <div class="card-body">
                    <div class="table-responsive pt-3">
                    <DialogTitle className='utilisateur' id='titreUtilistateur'>Liste des utilisateurs enregistrés</DialogTitle>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th hidden>#</th>
                                    <th>Nom</th>
                                    <th>Prenom</th>
                                    <th>Contact</th>
                                    <th >Whatsapp</th>
                                    <th>E-mail</th>
                                    <th>Administrateur</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.utilisateur_all.map(( valeur, keys) => {
                                    i++
                                    let admin_ck = ''
                                    if (valeur.admin === 1) { admin_ck = 'Administrateur' }
                                    else { admin_ck = 'Utilisateur' }

                                    return <tr>
                                        <td hidden>{i}</td>
                                        <td>{valeur.nom_utilisateur}</td>
                                        <td>{valeur.prenom_d_utilisateur}</td>
                                        <td>{valeur.contact}</td>
                                        <td>{valeur.whatsapp}</td>
                                        <td >{valeur.email}</td>
                                        <td >{admin_ck}</td>
                                        <td><Button color='primary' function={() => this.select_user(valeur)} name_of_btn="Voir" icon={<VisibilityIcon />} /></td>
                                    </tr>
                                })}
                            </tbody>
                            <FormAdd open_dialog_form={this.state.form_add} refresh_add={this.lister_all_users} close_dialog_form={this.close_form_add} />
                            <InformationUsers open_users_info={this.state.info_dialog_users} refresh={this.lister_all_users} information_users={this.state.users_info} close_dialog_info={this.close_dialog_info} />
                            <DialogActions>
                                <Button color='green' function={this.open_form_users} name_of_btn="Ajouter" icon={<AddIcon />} />
                            </DialogActions>
                    </table>
            </div>
          </div>
          </div>
          <Footer />
          </div>
                       
         )
         
        // }else {
        //   return(
        //     <div className='container'>
        //       <Menu />
        //     </div>
        //   )
        // }
        }
      }

export default UtilisateurApmf