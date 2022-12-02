import React, { PureComponent } from 'react'
import Button from '../button/button'
import CancelIcon from '@material-ui/icons/Cancel'
import EditRoundedIcon from '@material-ui/icons/EditRounded'
import { Dialog, DialogContent, DialogTitle } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import DialogActions from '@material-ui/core/DialogActions'
import FormModify from './UsersModify'
import Swal from 'sweetalert'
import Utilisateur from '../loginUsersInfo/usersConnected'
import Slide from '@material-ui/core/Slide'
import axios from 'axios';

class FormInfo extends PureComponent {
    state = {
        name: '',
        surname: '',
        whatsapp: '',
        id: '',
        contact: '',
        email: '',
        admin: '',
        password: '',
        form_modify: false
        
    }
    componentWillReceiveProps(nextProps) {
        this.setState({            
            name: nextProps.information_users.nom_utilisateur,
            surname: nextProps.information_users.prenom_d_utilisateur,
            whatsapp: nextProps.information_users.whatsapp,
            id: nextProps.information_users.id,
            contact: nextProps.information_users.contact,
            email: nextProps.information_users.email,
            admin: nextProps.information_users.admin,
            password: nextProps.information_users.password
        })
    }

    close_form_modify = () => {
        this.setState({
            name: '',
            surname: '',
            whatsapp: '',
            id: '',
            contact: '',
            email: '',
            admin: '',
            form_modify: false
        })
        this.props.refresh()
    }
    del_users_verification = () => {
        setTimeout(() => this.delete_users(), 200);
    }
    delete_users = async () => {
        if (Utilisateur.admin === true) {
            try {
                let delete_users = await axios.delete('http://localhost:3005/delete_users',{ headers:{ Authorization: "***"}, data: {id: this.props.information_users.id}});
                let resultat  = await delete_users.data;
                Swal({
                    title: resultat.title,
                    text: resultat.message,
                    icon: resultat.icon,
                })
                this.props.refresh()
                this.close_users_info()

            }
            catch (err) {
                console.log("Il y a une erreur dans la connection avec la base de donnee")
                throw err
            }
        }
        else {
            Swal({
                title: 'Erreur',
                text: "Droit d'administrateur requis pour cette action",
                icon: 'error'
            })
        }
    }
    refresh_modify = () => {
        //console.log("%cLa fonction contenant le props")
        this.props.refresh()
    }
    update_users = () => {
        if (Utilisateur.id_users === this.state.id) {
            this.setState({
                form_modify: true
            })
            this.props.close_dialog_info()
        }
        else {
            if (Utilisateur.admin === true) {
                this.setState({
                    form_modify: true
                })
                this.props.close_dialog_info()
            }
            else {
                Swal({
                    title: 'Erreur',
                    text: "Droit d'administrateur requis pour cette action",
                    icon: 'error'
                })
            }
        }
    }
    save_informmation_users = (info) => {
        this.setState({
            name: info.nom_utilisateur,
            surname: info.prenom_d_utilisateur,
            whatsapp: info.whatsapp,
            id: info.id,
            contact: info.contact,
            email: info.email,
            admin: info.admin
        })
    }
    close_users_info = () => {
        // console.log("refresh close_users_info")
        this.props.close_dialog_info()
    }
    Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="down" ref={ref} {...props} />
    })
    render() {
        // const information = this.props.information_users
        let admin_ck = ''
        if (this.state.admin === 0) { admin_ck = 'Utilisateur' }
        else { admin_ck = 'Administrateur' }
        return (
            <div>
                <Dialog open={this.props.open_users_info} onClose={this.close_users_info} TransitionComponent={this.Transition}
                    keepMounted>
                    <DialogTitle>
                        <strong><center>INFORMATION SUR L'UTILISATEUR</center></strong>
                    </DialogTitle>
                    <DialogContent>


                        <Typography color="textSecondary" variant="body2">
                            <b>Nom d'utilisateur:</b>
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            <p className='nom_utilisateur'>{this.state.name}</p>
                        </Typography>
                        <Divider variant="middle" />

                        <Typography color="textSecondary" variant="body2">
                            <b>Prenom d'utilisateur:</b>
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            <p className='prenom_dem'>{this.state.surname}</p>
                        </Typography>
                        <Divider variant="middle" />
                        <Typography color="textSecondary" variant="body2">
                            <b>Contact</b>
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            {this.state.contact}
                        </Typography>
                        <Divider variant="middle" />
                        <Typography color="textSecondary" variant="body2">
                            <b> Whatsapp</b>
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            {this.state.whatsapp}
                        </Typography>
                        <Divider variant="middle" />
                        <Typography color="textSecondary" variant="body2">
                            <b> Email</b>
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            {this.state.email}
                        </Typography>
                        <Divider variant="middle" />
                        <Typography color="textSecondary" variant="body2">
                            <b>Droit d'administrateur</b>
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            {admin_ck}
                        </Typography>
                        <Divider variant="middle" />
                    </DialogContent>
                    <FormModify open_dialog_form={this.state.form_modify} information_user={this.state} close_dialog_form={this.close_form_modify} />
                    <DialogActions>
                        <Button color='primary' function={this.del_users_verification} name_of_btn="Supprimer" icon={<DeleteIcon />}/>
                        <Button color='danger' function={this.update_users} name_of_btn="Modifier" icon={<EditRoundedIcon />} />
                        <Button color='secondary' function={this.close_users_info} name_of_btn='Fermer'icon={<CancelIcon />} />
                    </DialogActions>

                </Dialog>

            </div>
        )
    }
}

export default FormInfo

