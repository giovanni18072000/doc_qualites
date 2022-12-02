import React, { PureComponent } from 'react'
import Button from '../button/button'
import CancelIcon from '@material-ui/icons/Cancel'
import EditRoundedIcon from '@material-ui/icons/EditRounded'
import { Dialog, DialogContent, DialogTitle } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import DialogActions from '@material-ui/core/DialogActions'
import FormModify from './AttributionsModify'
import Swal from 'sweetalert'
import Utilisateur from '../loginUsersInfo/usersConnected'
import Slide from '@material-ui/core/Slide'
import axios from 'axios';

class FormInfo extends PureComponent {
    state = {
        idAttr:null,
        num_attribution:'',
        no_attribution:'',
        preno_attribution:'',
        dat_attribution:'',
        post_attribution:'',
        missio_attribution:'',
        activi_attribution:'',
        superie_attribution:'',
        diplo_attribution:'',
        autreCo_attribution:'',
        form_modify: false
    }
    
    async componentWillReceiveProps(nextProps) {
        //console.log(nextProps.information_attribution.dateAttr +"##############")
        let date = await this.datetostring(new Date(nextProps.information_attribution.dateAttr));
        this.setState({
            num_attribution: nextProps.information_attribution.numAttr,
            no_attribution: nextProps.information_attribution.nomAttr,
            preno_attribution: nextProps.information_attribution.prenomAttr,
            id: nextProps.information_attribution.idAttr,
            dat_attribution: date,
            post_attribution: nextProps.information_attribution.posteAttr,
            missio_attribution: nextProps.information_attribution.missionsAttr,
            activi_attribution: nextProps.information_attribution.activiteAttr,
            superie_attribution: nextProps.information_attribution.superieurAttr,
            diplo_attribution: nextProps.information_attribution.diplomeAttr,
            autreCo_attribution: nextProps.information_attribution.autreCompAttr,
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
            idAttr:null,
            num_attribution:'',
            no_attribution:'',
            preno_attribution:'',
            dat_attribution:'',
            post_attribution:'',
            missio_attribution:'',
            activi_attribution:'',
            superie_attribution:'',
            diplo_attribution:'',
            autreCo_attribution:'',
            form_modify: false
        })
        this.props.refresh()
    }

    del_attributions_verification = () => {
        setTimeout(() => this.delete_attributions(), 200);
    }
    
    delete_attributions = async () => {
         if (Utilisateur.admin === true) {
            try {
                let delete_attributions = await axios.delete('http://localhost:3005/delete_attributions',{ headers:{ Authorization: "***"}, data: {idAttr: this.props.information_attribution.idAttr}});
                let resultat  = await delete_attributions.data;
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

    update_attributions = () => {
        if (Utilisateur.id_attributions === this.state.idAttr) 
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
    save_informmation_attributions = (info) => {      
        this.setState({
            num_attribution: info.numAttr,
            no_attribution: info.nomAttr,
            preno_attribution: info.prenomAttr,
            id: info.idAttr,
            dat_attribution:info.date,
            post_attribution: info.posteAttr,
            missio_attribution: info.missionsAttr,
            activi_attribution: info.activiteAttr,
            superie_attribution: info.superieurAttr,
            diplo_attribution: info.diplomeAttr,
            autreCo_attribution: info.autreCompAttr,
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
        // const information = this.props.information_attributions
        let admin_ck = ''
        if (this.state.admin === 0) { admin_ck = 'Utilisateur' }
        else { admin_ck = 'Administrateur' }
        return (
            <div>
                <Dialog open={this.props.attribuinfo} onClose={this.attribuinfo} TransitionComponent={this.Transition}
                    keepMounted>
                    <DialogTitle>
                        <strong><center>INFORMATION SUR L'ATTRIBUTION</center></strong>
                    </DialogTitle>
                    <DialogContent>

                        <Typography color="textSecondary" variant="body2">
                            <b>Numero d'attribution:</b>
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            <p className='numero_utilisateur'>{this.state.num_attribution}</p>
                        </Typography>
                        <Divider variant="middle" />

                        <Typography color="textSecondary" variant="body2">
                            <b>Nom d'attribution:</b>
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            <p className='nom_utilisateur'>{this.state.no_attribution}</p>
                        </Typography>
                        <Divider variant="middle" />

                        <Typography color="textSecondary" variant="body2">
                            <b>Prenom d'utilisateur:</b>
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            <p className='prenom_dem'>{this.state.preno_attribution}</p>
                        </Typography>
                        <Divider variant="middle" />

                        <Typography color="textSecondary" variant="body2">
                            <b>Date entrée:</b>
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            <p className='date_dem'>{this.state.dat_attribution}</p>
                        </Typography>
                        <Divider variant="middle" />


                        <Typography color="textSecondary" variant="body2">
                            <b>Poste d'attribution</b>
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            {this.state.post_attribution}
                        </Typography>
                        <Divider variant="middle" />

                        <Typography color="textSecondary" variant="body2">
                            <b> Missions d'attribution</b>
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            {this.state.missio_attribution}
                        </Typography>
                        <Divider variant="middle" />
            
                        <Typography color="textSecondary" variant="body2">
                            <b> Activite d'attribution</b>
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            {this.state.activi_attribution}
                        </Typography>
                        <Divider variant="middle" />

                        <Typography color="textSecondary" variant="body2">
                            <b> Supérieur d'attribution</b>
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            {this.state.superie_attribution}
                        </Typography>
                        <Divider variant="middle" />

                        <Typography color="textSecondary" variant="body2">
                            <b> Diplome d'attribution</b>
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            {this.state. diplo_attribution}
                        </Typography>
                        <Divider variant="middle" />

                        <Typography color="textSecondary" variant="body2">
                            <b> Autre competence d'attribution</b>
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            {this.state. autreCo_attribution}
                        </Typography>
                        <Divider variant="middle" />
                    </DialogContent>
                    <FormModify openattribuform={this.state.form_modify} information_attributions={this.state} close_dialog_form={this.close_form_modify} />
                    <DialogActions>
                        <Button color='primary' function={this.del_attributions_verification} name_of_btn="Supprimer" icon={<DeleteIcon />}/>
                        <Button color='danger' function={this.update_attributions} name_of_btn="Modifier" icon={<EditRoundedIcon />} />
                        <Button color='secondary' function={this.close_dialog_info} name_of_btn='Fermer'icon={<CancelIcon />} />
                    </DialogActions>

                </Dialog>

            </div>
        )
    }
}

export default FormInfo

