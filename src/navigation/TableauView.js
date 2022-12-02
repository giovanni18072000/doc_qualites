import React, { PureComponent } from 'react'
import Button from '../button/button'
import CancelIcon from '@material-ui/icons/Cancel'
import EditRoundedIcon from '@material-ui/icons/EditRounded'
import { Dialog, DialogContent, DialogTitle } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import DialogActions from '@material-ui/core/DialogActions'
import FormModify from './TableauModify'
import Swal from 'sweetalert'
import Utilisateur from '../loginUsersInfo/usersConnected'
import Slide from '@material-ui/core/Slide'
import axios from 'axios';

class FormInfo extends PureComponent {
    state = {
        idTab:null,
        identifica_tableau:'',
        activi_tableau:'',
        pilo_tableau:'',
        ty_tableau:'',
        date_de_tableau:'',
        date_f_tableau:'',
        tri_tableau:'',
        informa_tableau:'',
        progre_tableau:'',
        pourcent_tableau:'',
        form_modify: false
    }
    
    async componentWillReceiveProps(nextProps) {
        //console.log(nextProps.information_tableau.dateAttr +"##############")
        let dateDebut = await this.datetostring(new Date(nextProps.information_tableau.dateDebTable));
        let dateFin = await this.datetostring(new Date(nextProps.information_tableau.dateFiTable));
        this.setState({
            identifica_tableau: nextProps.information_tableau.idTable,
            activi_tableau: nextProps.information_tableau.activiteTable,
            pilo_tableau: nextProps.information_tableau.piloteTable,
            ty_tableau: nextProps.information_tableau.typeTable,
            id: nextProps.information_tableau.idTab,
            date_de_tableau: dateDebut,
            date_f_tableau: dateFin,
            tri_tableau: nextProps.information_tableau.trimTable,
            informa_tableau: nextProps.information_tableau.informationTable,
            progre_tableau: nextProps.information_tableau.progressionTable,
            pourcent_tableau: nextProps.information_tableau.pourcentageTable,
        })
    }

    datetostring  = (d) => {
        return new Promise(resolve => {
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
            let dateliteral = jours + " " +  mois + " " + years;
            resolve(dateliteral);
        })
    }

    close_form_modify = () => {
        this.setState({
            idTab:null,
            identifica_tableau:'',
            activi_tableau:'',
            pilo_tableau:'',
            ty_tableau:'',
            date_de_tableau:'',
            date_f_tableau:'',
            tri_tableau:'',
            informa_tableau:'',
            progre_tableau:'',
            pourcent_tableau:'',
            form_modify: false
        })
        this.props.refresh()
    }

    del_tableau_verification = () => {
        setTimeout(() => this.delete_tableau(), 200);
    }
    
    delete_tableau = async () => {
         if (Utilisateur.admin === true) {
            try {
                let delete_tableau = await axios.delete('http://localhost:3005/delete_tableau',{ headers:{ Authorization: "***"}, data: {idTab: this.props.information_tableau.idTab}});
                let resultat  = await delete_tableau.data;
                Swal({
                    title: resultat.title,
                    text: resultat.message,
                    icon: resultat.icon,
                })
                this.close_dialog_info()
                this.props.refresh()

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

    update_tableau = () => {
        if (Utilisateur.id_tableau === this.state.idTab) 
        {
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
    save_informmation_tableau = (info) => {      
        this.setState({
            identifica_tableau: info.idTable,
            activi_tableau: info.activiteTable,
            pilo_tableau: info.piloteTable,
            ty_tableau: info.typeTable,
            id: info.idTab,
            date_de_tableau: info.dateDebut,
            date_f_tableau: info.dateFin,
            tri_tableau: info.trimTable,
            informa_tableau: info.informationTable,
            progre_tableau: info.progressionTable,
            pourcent_tableau: info.pourcentageTable,
        })
    }
    close_dialog_info = () => {
        // console.log("refresh close_users_info")
        this.props.close_dialog_info()
    }
    Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="down" ref={ref} {...props} />
    })
    render() {
        // const information = this.props.information_tableau
        let admin_ck = ''
        if (this.state.admin === 0) { admin_ck = 'Utilisateur' }
        else { admin_ck = 'Administrateur' }
        return (
            <div>
                <Dialog open={this.props.tableauinfo} onClose={this.tableauinfo} TransitionComponent={this.Transition}
                    keepMounted>
                    <DialogTitle>
                        <strong><center>INFORMATION SUR TABLEAU DE BORD</center></strong>
                    </DialogTitle>
                    <DialogContent>
                        <Typography color="textSecondary" variant="body2">
                            <b>Identification:</b>
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            <p className='identfication_tableau'>{this.state.identifica_tableau}</p>
                        </Typography>
                        <Divider variant="middle" />

                        <Typography color="textSecondary" variant="body2">
                            <b>Activité:</b>
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            <p className='activite_tableau'>{this.state.activi_tableau}</p>
                        </Typography>
                        <Divider variant="middle" />

                        <Typography color="textSecondary" variant="body2">
                            <b>Pilote:</b>
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            <p className='pilote_tableau'>{this.state.pilo_tableau}</p>
                        </Typography>
                        <Divider variant="middle" />

                        <Typography color="textSecondary" variant="body2">
                            <b>Type:</b>
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            <p className='type_tableau'>{this.state.ty_tableau}</p>
                        </Typography>
                        <Divider variant="middle" />


                        <Typography color="textSecondary" variant="body2">
                            <b>Date début:</b>
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            {this.state.date_de_tableau}
                        </Typography>
                        <Divider variant="middle" />

                        <Typography color="textSecondary" variant="body2">
                            <b> Date Fin:</b>
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            {this.state.date_f_tableau}
                        </Typography>
                        <Divider variant="middle" />
            
                        <Typography color="textSecondary" variant="body2">
                            <b> Trim:</b>
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            {this.state.tri_tableau}
                        </Typography>
                        <Divider variant="middle" />

                        <Typography color="textSecondary" variant="body2">
                            <b> Informations:</b>
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            {this.state.informa_tableau}
                        </Typography>
                        <Divider variant="middle" />

                        <Typography color="textSecondary" variant="body2">
                            <b> Progression:</b>
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            {this.state.progre_tableau}
                        </Typography>
                        <Divider variant="middle" />

                        <Typography color="textSecondary" variant="body2">
                            <b> Pourcentage:</b>
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            {this.state.pourcent_tableau}
                        </Typography>
                        <Divider variant="middle" />
                    </DialogContent>
                    <FormModify opentableauform={this.state.form_modify} information_tableau={this.state} close_dialog_form={this.close_form_modify} />
                    <center>
                        <DialogActions>
                            <Button color='primary' function={this.del_tableau_verification} name_of_btn="Supprimer" icon={<DeleteIcon />}/>
                            <Button color='danger' function={this.update_tableau} name_of_btn="Modifier" icon={<EditRoundedIcon />} />
                            <Button color='secondary' function={this.close_dialog_info} name_of_btn='Fermer'icon={<CancelIcon />} />
                        </DialogActions>
                    </center>
                </Dialog>

            </div>
        )
    }
}

export default FormInfo

