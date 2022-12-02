import React, { PureComponent } from 'react'
import { Dialog, DialogContent, DialogTitle, TextField, Checkbox, FormControlLabel } from '@material-ui/core'
import Button from '../button/button'
import DialogActions from '@material-ui/core/DialogActions';
import CancelIcon from '@material-ui/icons/Cancel'
import AddIcon from '@material-ui/icons/Add';
import Swal from 'sweetalert'
import Slide from '@material-ui/core/Slide'
import PasswordForm from './passwordForm'
import axios from 'axios';

class DialogFormulaire extends PureComponent {
    state = {
        name: '',
        error_name: null,
        error_surname: null,
        surname: '',
        contact: '',
        error_contact: null,
        whatsapp_contact: '',
        error_whatsapp: null,
        email: '',
        error_email: null,
        password: '',
        check_box: false
    }
    change_pass = (e) => {
        // let passValue = document.getElementById('standard-adornment-password').value
        this.setState({
            password: e.target.value
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
        this.setState({
            check_box: !this.state.check_box,
        })
    }
    save_user = async () => {
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
                const data = {
                    id : this.state.id,
                    name_user: this.state.name,
                    prenom_user: this.state.surname,
                    contact: this.state.contact,
                    whatsapp_contact: this.state.whatsapp_contact,
                    email: this.state.email,
                    droit_administrateur: this.state.check_box,
                    password: this.state.password
                };
                console.log(data)
                try {
                    let send = await axios.post('http://localhost:3005/users_add',data);
                    let response  = await send.data;
                    Swal({
                        title: response.title,
                        text: response.message,
                        icon: response.icon,
                    });
                    if (response.form_error === true) {
                        console.log('Remplir le correctement le formulaire');
                    }
                    else {
                        this.props.refresh_add()
                        this.close_dialog_form()
                    }
                }
                catch (e) { throw (e) }
            }
            else {
                console.log(this.state)
                Swal({
                    title: 'Erreur',
                    text: 'Veuillez remplir correctement',
                    icon: 'info',
                });
            }
        }
    }
    name_verification = () => {
        let name_message = ''
        if (this.state.name.length < 5) { name_message = "nom d'utilisateur trop court" }
        else if (this.state.name.length > 50) { name_message = "nom d'utilisateur trop long" }
        else { name_message = null }
        this.setState({
            error_name: name_message,
        })
    }
    surname_verification = () => {
        let surname_message = ''
        if (this.state.surname.length < 5) { surname_message = "prenom trop court" }
        else if (this.state.surname.length > 50) { surname_message = "prenom trop long" }
        else { surname_message = null }
        this.setState({
            error_surname: surname_message,
        })
    }
    contact_verification = () => {
        let contact_message = ''
        let numString = this.state.contact.toString()
        if (numString.length < 5) { contact_message = "contact trop court" }
        else if (numString.length > 15) { contact_message = "contact trop long" }
        else { contact_message = null }
        this.setState({
            error_contact: contact_message,
        })
    }
    whatsapp_verification = () => {
        let whatsapp_contact_message = ''
        let numString = this.state.whatsapp_contact.toString()
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
        //let url = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
        //let url = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        //regex.test return boolean if valid or not 
        let verify_if_valid = regex.test(this.state.email)
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
    close_dialog_form = () => {
        this.setState({
            name: '',
            error_name: null,
            error_surname: null,
            surname: '',
            contact: '',
            error_contact: null,
            whatsapp_contact: '',
            error_whatsapp: null,
            email: '',
            error_email: null,
            password: '',
            check_box: false
        })
        this.props.close_dialog_form()
    }
    Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    render() {
        return (
            <>
                <Dialog open={this.props.open_dialog_form} onClose={this.close_dialog_form} TransitionComponent={this.Transition}
                    keepMounted >
                    <DialogTitle><strong><center>UTILISATEUR</center></strong></DialogTitle>
                    <DialogContent>
                        <form>
                            <TextField name="nom_d_utilisateur_add" value={this.state.name} onBlur={this.name_verification} onFocus={() => { this.setState({ error_name: null }) }} placeholder="ex : NOMENJANAHARY" onChange={this.change_name} helperText={this.state.error_name} error={this.state.error_name ? (true) : (false)} type="name" id="add_nom_d_utilisateur" label="Nom " fullWidth={true} />
                            <TextField name="prenom_d_utilisateur_add" value={this.state.surname} onBlur={this.surname_verification} onFocus={() => { this.setState({ error_surname: null }) }} placeholder="ex : Albertin" onChange={this.change_surname} helperText={this.state.error_surname} error={this.state.error_surname ? (true) : (false)} type="name" id="add_prenom_d_utilisateur" label="Prenom" fullWidth={true} />
                            <TextField name="contact_add" value={this.state.contact} placeholder="+261347584652" onChange={this.change_contact} onBlur={this.contact_verification} onFocus={() => { this.setState({ error_contact: null }) }} helperText={this.state.error_contact} error={this.state.error_contact ? (true) : (false)} type="number" id="add_contact" label="Numero de telephone" fullWidth={true} />
                            <TextField name="whatp_app_contact_add" value={this.state.whatsapp_contact} onBlur={this.whatsapp_verification} onFocus={() => { this.setState({ error_whatsapp: null }) }} helperText={this.state.error_whatsapp} error={this.state.error_whatsapp ? (true) : (false)}
                                placeholder="555154225" onChange={this.whatsapp_contact} type="number" id="add_whatp_app_contact" label="Numero Whatsapp" fullWidth={true} />
                            <TextField value={this.state.email} type='email' placeholder="exemple@gmail.com" onBlur={this.email_verification} helperText={this.state.error_email ? (this.state.error_email) : ''} onFocus={() => { this.setState({ error_email: null }) }} error={this.state.error_email ? (true) : (false)} onChange={this.change_email} id="add_Email_users" label="e-mail" fullWidth={true} />
                            <PasswordForm password={this.state.password} changePass={(val) => this.change_pass(val)} />
                            <FormControlLabel control={<Checkbox checked={this.state.check_box} onChange={this.change_check_box} name="ChexBox" />}
                                label="Droit d'administrateur" fullWidth={true} />
                        </form>
                        <DialogActions>
                            <Button color='primary' function={this.save_user} name_of_btn="ajouter" icon={<AddIcon />} />
                            <Button color='secondary' function={this.close_dialog_form} name_of_btn="fermer" icon={<CancelIcon />}/>
                        </DialogActions>
                    </DialogContent>
                </Dialog>
            </>
        )
    }
}

export default DialogFormulaire