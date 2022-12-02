import React, { PureComponent } from 'react'
import { Dialog, DialogContent, DialogTitle, TextField, Checkbox, FormControlLabel } from '@material-ui/core'
import SaveIcon from '@material-ui/icons/Save'
import CancelIcon from '@material-ui/icons/Cancel'
import DialogActions from '@material-ui/core/DialogActions';
import Swal from 'sweetalert'
import Slide from '@material-ui/core/Slide'
import Button from '../button/button'
//import Utilisateur from '../../loginUsersInfo/usersConnected'
import Utilisateur from '../loginUsersInfo/usersConnected'
import PasswordForm from './passwordForm'
import axios from 'axios';

class DialogFormulaire extends PureComponent {
    state = {
        name: '',
        surname: '',
        contact: '',
        whatsapp_contact: '',
        email: '',
        password: '',
        check_box: false,
        id: '',
        error_name: null,
        error_surname: null,
        error_contact: null,
        error_whatsapp: null,
        error_email: null,
    }
    componentWillReceiveProps(nextprops) {
        let bool = false
        // console.log(nextprops.information_user)
        if (nextprops.information_user.admin === 1) { bool = true }
        // console.log(nextprops.information_user.admin)
        // console.log(bool)
        this.setState({
            name: nextprops.information_user.name,
            surname: nextprops.information_user.surname,
            contact: nextprops.information_user.contact,
            whatsapp_contact: nextprops.information_user.whatsapp,
            email: nextprops.information_user.email,
            check_box: bool,
            id: nextprops.information_user.id,
            password: nextprops.information_user.password
        })
    }
    change_name = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    change_surname = (e) => {
        this.setState({
            surname: e.target.value
        })
    }
    change_contact = (e) => {
        this.setState({
            contact: e.target.value
        })
    }
    whatsapp_contact = (e) => {
        this.setState({
            whatsapp_contact: e.target.value
        })
    }
    change_email = (e) => {
        this.setState({
            email: e.target.value
        })
    }
    change_check_box = () => {
        if (Utilisateur.admin === true) {
            this.setState({
                check_box: !this.state.check_box,
            })
        }
        else {
            Swal({
                title: 'Erreur',
                text: "Droit d'administrateur requis pour cette action",
                icon: 'info',
            });
        }
    }
    name_verification = () => {
        let name_message = ''
        if (this.state.name.length < 5) { name_message = "au moins 5 caractères" }
        else if (this.state.name.length > 50) { name_message = "Le nom d'utilisateur est trop long" }
        else { name_message = null }
        this.setState({
            error_name: name_message,
        })
    }
    surname_verification = () => {
        let surname_message = ''
        if (this.state.surname.length < 5) { surname_message = "au moins 5 caractères" }
        else if (this.state.surname.length > 50) { surname_message = "prenom trop long" }
        else { surname_message = null }
        this.setState({
            error_surname: surname_message,
        })
    }
    contact_verification = () => {
        let contact_message = ''
        let numString = this.state.contact
        if (numString.length < 5) { contact_message = "Numero de telephone invalide" }
        else if (numString.length > 15) { contact_message = "Numero de telephone trop long" }
        else { contact_message = null }
        this.setState({
            error_contact: contact_message,
        })
    }
    whatsapp_verification = () => {
        let whatsapp_contact_message = ''
        let numString = this.state.whatsapp_contact
        if (numString.length < 5) { whatsapp_contact_message = "numero whatsapp trop court" }
        else if (numString.length > 15) { whatsapp_contact_message = "numero whatsapp trop long" }
        else { whatsapp_contact_message = null }
        this.setState({
            error_whatsapp: whatsapp_contact_message,
        })
    }
    email_verification = () => {
        let email_valid = ''
        //verification email valide front end(regex)
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        //regex.test return boolean if valid or not 
        let verify_if_valid = regex.test(this.state.email)
        if (Utilisateur.email_users !== 'dg@instat.mg' && this.state.email === 'dg@instat.mg') {
            email_valid = "L'adresse e-mail du directeur ne peut etre modifier"
        }
        if (verify_if_valid) {
            email_valid = null
        }
        else {
            email_valid = "e-mail invalide"
        }
        this.setState({
            error_email: email_valid
        })
    }
    save_modify = async () => {
        const data ={
            id: this.state.id,
            name_user: this.state.name,
            prenom_user: this.state.surname,
            contact: this.state.contact,
            whatsapp_contact: this.state.whatsapp_contact,
            email: this.state.email,
            droit_administrateur: this.state.check_box,
            password: this.state.password,
        }
        if (this.state.name_user === '' || this.state.surname === '' || this.state.contact === null || this.state.whatsapp_contact === null || this.state.email === '' || this.state.password === '') {
            Swal({
                title: 'Erreur',
                text: 'Veuillez remplir toutes les cases',
                icon: 'info',
            });
        }
        else {
            let a = this.state
            if (a.error_name === null && a.error_contact === null && a.error_surname === null && a.error_whatsapp === null && a.error_email === null) {
                try {
                    let send = await axios.put('http://localhost:3005/update_users',data);
                    let response  = await send.data;
                    if (response.success === true) {
                        //enregidtrement des nouvelle modification
                        Utilisateur.prenom_users = this.state.surname;
                        Utilisateur.email_users = this.state.email;
                        Utilisateur.whatsapp = this.state.whatsapp_contact;
                        Utilisateur.password = this.state.password;
                        Utilisateur.contact = this.state.contact;
                        Utilisateur.username = this.state.name;
                        Utilisateur.admin = this.state.check_box;
                    }
                    Swal({
                        title: response.title,
                        text: response.message,
                        icon: response.icon,
                    })
                    if (response.form_error === true) {
                        console.log('remplir correctement le formulaire')
                    }
                    else {
                        this.close_dialog_form()
                    }

                }
                catch (e) { throw (e) }
            }
            else {
                Swal({
                    title: 'Erreur',
                    text: 'Remplir correctement le formulaire',
                    icon: 'info',
                });
            }
        }
    }
    change_pass = (event) => {
        // let passValue = document.getElementById('standard-adornment-password').value
        this.setState({
            password: event.target.value
        })
    }
    close_dialog_form = () => {
        this.setState({
            name: '',
            surname: '',
            contact: '',
            whatsapp_contact: '',
            email: '',
            check_box: false,
            id: '',
            error_name: null,
            error_surname: null,
            error_contact: null,
            error_whatsapp: null,
            error_email: null,
        })
        this.props.close_dialog_form()
    }
    Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    render() {
        let users_pass = ''
        if (Utilisateur.id_users === this.state.id) {
            users_pass = <PasswordForm password={this.state.password} changePass={(val) => this.change_pass(val)} />
        }
        let email_dg = false;
        if (this.props.information_user.email === 'dg@instat.mg') {
            email_dg = true
        }
        return (
            <>
                <Dialog open={this.props.open_dialog_form} onClose={this.close_dialog_form} TransitionComponent={this.Transition}
                    keepMounted >
                    <DialogTitle><strong><center>UTILISATEUR</center></strong></DialogTitle>
                    <DialogContent>
                        <form>
                            <TextField name="nom_d_utilisateur" value={this.state.name} onBlur={this.name_verification} onFocus={() => { this.setState({ error_name: null }) }} placeholder="ex : NOMENJANAHARY" onChange={this.change_name} helperText={this.state.error_name} error={this.state.error_name ? (true) : (false)} type="name" id="modify_nom_d_utilisateur" label="Nom " fullWidth={true} />
                            <TextField name="prenom_d_utilisateur" value={this.state.surname} onBlur={this.surname_verification} onFocus={() => { this.setState({ error_surname: null }) }} placeholder="ex : Albertin" onChange={this.change_surname} helperText={this.state.error_surname} error={this.state.error_surname ? (true) : (false)} type="name" id="modify_prenom_d_utilisateur" label="Prenom" fullWidth={true} />
                            <TextField name="contact" value={this.state.contact} placeholder="+261347584652" onChange={this.change_contact} onBlur={this.contact_verification} onFocus={() => { this.setState({ error_contact: null }) }} helperText={this.state.error_contact} error={this.state.error_contact ? (true) : (false)} type="number" id="modify_contact" label="Numero de telephone" fullWidth={true} />
                            <TextField name="whatp_app_contact" value={this.state.whatsapp_contact} onBlur={this.whatsapp_verification} onFocus={() => { this.setState({ error_whatsapp: null }) }} helperText={this.state.error_whatsapp} error={this.state.error_whatsapp ? (true) : (false)}
                                placeholder="555154225" onChange={this.whatsapp_contact} type="number" id="modify_whatp_app_contact" label="Numero Whatsapp" fullWidth={true} />

                            <TextField name="email" value={this.state.email} type='email' InputProps={{
                                readOnly: email_dg,
                            }} placeholder="votre_email@gmail.com" onBlur={this.email_verification} helperText={this.state.error_email ? (this.state.error_email) : ''} onFocus={() => { this.setState({ error_email: null }) }} error={this.state.error_email ? (true) : (false)} onChange={this.change_email} id="modify_Email" label="E-mail" fullWidth={true} />
                            {users_pass}
                            <FormControlLabel control={<Checkbox checked={this.state.check_box} onChange={this.change_check_box} name="ChexBox" />}
                                label="Droit d'administrateur" fullWidth={true} />
                        </form>
                        <DialogActions>
                            <Button color='primary' function={this.save_modify} name_of_btn="Enregistrer" icon={<SaveIcon />} />
                            <Button color='secondary' function={this.close_dialog_form} name_of_btn="fermer" icon={<CancelIcon />} />
                        </DialogActions>
                    </DialogContent>
                </Dialog>
            </>
        )
    }
}

export default DialogFormulaire
