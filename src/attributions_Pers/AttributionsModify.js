import React, { PureComponent } from 'react'
import Slide from '@material-ui/core/Slide'
import { Dialog, DialogContent, DialogTitle, TextField} from '@material-ui/core'
import Button from '../button/button'
import DialogActions from '@material-ui/core/DialogActions';
import Swal from 'sweetalert';
import axios from 'axios';
import CancelIcon from '@material-ui/icons/Cancel'
import SaveIcon from '@material-ui/icons/Save'
import { MuiPickersUtilsProvider, KeyboardDatePicker, } from '@material-ui/pickers';
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns';
import Utilisateur from '../loginUsersInfo/usersConnected'
import { fr } from 'date-fns/locale';
import { FormLabel} from '@material-ui/core';

class AttributionsForm extends PureComponent {
    state = {
        idAttr:null,
        numero_attribution:'',
        nom_attribution:'',
        prenom_attribution:'',
        date_attribution:'',
        poste_attribution:'',
        missions_attribution:'',
        activite_attribution:'',
        superieur_attribution:'',
        diplome_attribution:'',
        autreComp_attribution:'',

        error_numero_attribution: null,
        error_nom_attribution: null,
        error_prenom_attribution: null,
        error_date_attribution: null,
        error_poste_attribution: null,
        error_missions_attribution: null,
        error_activite_attribution: null,
        error_superieur_attribution: null,
        error_diplome_attribution: null,
        error_autreComp_attribution: null,

    }
   componentWillReceiveProps(nextprops) {
        //let bool = false
         //console.log(nextprops.information_attributions)
        //if (nextprops.information_user.admin === 1) { bool = true }
        // console.log(nextprops.information_user.admin)
        this.setState({
            idAttr: nextprops.information_attributions.id,      
            numero_attribution: nextprops.information_attributions.num_attribution,
            nom_attribution: nextprops.information_attributions.no_attribution,
            prenom_attribution: nextprops.information_attributions.preno_attribution,
            date_attribution: nextprops.information_attributions.dat_attribution,
            poste_attribution: nextprops.information_attributions.post_attribution,
            missions_attribution: nextprops.information_attributions.missio_attribution,
            activite_attribution: nextprops.information_attributions.activi_attribution,
            superieur_attribution: nextprops.information_attributions.superie_attribution,
            diplome_attribution: nextprops.information_attributions.diplo_attribution,
            autreComp_attribution: nextprops.information_attributions.autreCo_attribution
        })
    }

    change_numero_attribution = (e) => {
        this.setState({
            numero_attribution: e.target.value
        })
        //console.log(e.target);
    }
    change_nom_attribution = (e) => {
        this.setState({
            nom_attribution: e.target.value
        })
        //console.log(e.target);
    }
    change_prenom_attribution = (e) => {
        this.setState({
            prenom_attribution: e.target.value
        })
        //console.log(e.target);
    }
    change_date_attribution = (date) => {
        this.setState({
            date_attribution: new Date(date.getFullYear(), date.getMonth(), date.getDate())
        })
        //console.log(e.target);
    }
    change_poste_attribution = (e) => {
        this.setState({
            poste_attribution: e.target.value
        })
        //console.log(e.target);
    }
    change_missions_attribution = (e) => {
        this.setState({
            missions_attribution: e.target.value
        })
        //console.log(e.target);
    }
    change_activite_attribution = (e) => {
        this.setState({
            activite_attribution: e.target.value
        })
        //console.log(e.target);
    }
    change_superieur_attribution = (e) => {
        this.setState({
            superieur_attribution: e.target.value
        })
        //console.log(e.target);
    }
    change_diplome_attribution = (e) => {
        this.setState({
            diplome_attribution: e.target.value
        })
        //console.log(e.target);
    }
    change_autreComp_attribution = (e) => {
        this.setState({
            autreComp_attribution: e.target.value
        })
        //console.log(e.target);
    }

    numero_attribution_verification = () => {
        let numero_attribution_message = ''
        if (this.state.numero_attribution.length < 1) { numero_attribution_message = "numero d'utilisateur trop court" }
        else if (this.state.numero_attribution.length > 10) { numero_attribution_message = "numero d'utilisateur trop long" }
        else { numero_attribution_message = null }
        this.setState({
            error_numero_attribution: numero_attribution_message,
        })
    }
    nom_attribution_verification = () => {
        let nom_attribution_message = ''
        if (this.state.nom_attribution.length < 5) { nom_attribution_message = "nom d'utilisateur trop court" }
        else if (this.state.nom_attribution.length > 50) { nom_attribution_message = "nom d'utilisateur trop long" }
        else { nom_attribution_message = null }
        this.setState({
            error_nom_attribution: nom_attribution_message,
        })
    }
    prenom_attribution_verification = () => {
        let prenom_attribution_message = ''
        if (this.state.prenom_attribution.length < 5) { prenom_attribution_message = "prenom trop court" }
        else if (this.state.prenom_attribution.length > 50) { prenom_attribution_message = "prenom trop long" }
        else { prenom_attribution_message = null }
        this.setState({
            error_prenom_attribution: prenom_attribution_message,
        })
    }
    poste_attribution_verification = () => {
        let poste_attribution_message = ''
        if (this.state.poste_attribution.length < 5) { poste_attribution_message = "poste trop court" }
        else if (this.state.poste_attribution.length > 50) { poste_attribution_message = "poste trop long" }
        else { poste_attribution_message = null }
        this.setState({
            error_poste_attribution: poste_attribution_message,
        })
    }
    missions_attribution_verification = () => {
        let missions_attribution_message = ''
        if (this.state.missions_attribution.length < 5) { missions_attribution_message = "Missions trop court" }
        else if (this.state.missions_attribution.length > 255) { missions_attribution_message = "Missions trop long" }
        else { missions_attribution_message = null }
        this.setState({
            error_missions_attribution: missions_attribution_message,
        })
    }
    activite_attribution_verification = () => {
        let activite_attribution_message = ''
        if (this.state.activite_attribution.length < 5) { activite_attribution_message = "activité trop court" }
        else if (this.state.activite_attribution.length > 255) { activite_attribution_message = "activité trop long" }
        else { activite_attribution_message = null }
        this.setState({
            error_activite_attribution: activite_attribution_message,
        })
    }
    superieur_attribution_verification = () => {
        let superieur_attribution_message = ''
        if (this.state.superieur_attribution.length < 5) { superieur_attribution_message = "supérieur hierarchie trop court" }
        else if (this.state.superieur_attribution.length > 50) { superieur_attribution_message = "supérieur hierarchie trop long" }
        else { superieur_attribution_message = null }
        this.setState({
            error_superieur_attribution: superieur_attribution_message,
        })
    }
    diplome_attribution_verification = () => {
        let diplome_attribution_message = ''
        if (this.state.diplome_attribution.length < 5) { diplome_attribution_message = "diplome trop court" }
        else if (this.state.diplome_attribution.length > 50) { diplome_attribution_message = "diplome trop long" }
        else { diplome_attribution_message = null }
        this.setState({
            error_diplome_attribution: diplome_attribution_message,
        })
    }
    autreComp_attribution_verification = () => {
        let autreComp_attribution_message = ''
        if (this.state.autreComp_attribution.length < 5) { autreComp_attribution_message = "autres competences trop court" }
        else if (this.state.autreComp_attribution.length > 50) { autreComp_attribution_message = "autres competences trop long" }
        else { autreComp_attribution_message = null }
        this.setState({
            error_autreComp_attribution: autreComp_attribution_message,
        })
    }

    save_modify = async () => {
        const data ={
            
            idAttr : this.state.idAttr,
            numero_Attribution: this.state.numero_attribution,
            nom_Attribution: this.state.nom_attribution,
            prenom_Attribution: this.state.prenom_attribution,
            date_Attribution: this.state.date_attribution,
            poste_Attribution: this.state.poste_attribution,
            missions_Attribution: this.state.missions_attribution,
            activite_Attribution: this.state.activite_attribution,
            superieur_Attribution: this.state.superieur_attribution,
            diplome_Attribution: this.state.diplome_attribution,
            autreComp_Attribution: this.state.autreComp_attribution
        }

        if (this.state.numero_attribution  === '' || this.state.nom_attribution  === '' || this.state.prenom_attribution  === '' || this.state.poste_attribution  === ''
            || this.state.missions_attribution  === '' || this.state.activite_attribution  === '' || this.state.superieur_attribution  === '' || this.state.diplome_attribution  === ''|| this.state.autreComp_attribution  === '') {
            Swal({
                title: 'Erreur',
                text: 'Veuillez remplir toutes les cases',
                icon: 'info',
            });
        }
        else {
            let a = this.state
            if (a.error_numero_attribution === null && a.error_nom_attribution === null && a.error_prenom_attribution === null && a.error_poste_attribution === null
                && a.error_missions_attribution === null && a.error_activite_attribution === null && a.error_superieur_attribution === null && a.error_diplome_attribution === null && a.error_autreComp_attribution === null) {
                try {
                    let send = await axios.put('http://localhost:3005/update_attributions',data);
                    let response  = await send.data;
                     if (response.success === true) {
                        //enregidtrement des nouvelle modification
                        Utilisateur.numero_Attributions= this.state.numero_attribution;
                        Utilisateur.nom_Attributions= this.state.nom_attribution;
                        Utilisateur.prenom_Attributions= this.state.prenom_attribution;
                        Utilisateur.date_Attributions= this.state.date_attribution;
                        Utilisateur.poste_Attributions= this.state.poste_attribution;
                        Utilisateur.missions_Attributions= this.state.missions_attribution;
                        Utilisateur.activite_Attributions= this.state.activite_attribution;
                        Utilisateur.superieur_Attributions= this.state.superieur_attribution;
                        Utilisateur.diplome_Attributions= this.state.diplome_attribution;
                        Utilisateur.autreComp_Attributions= this.state.autreComp_attribution;
                     }
                    Swal({
                        title: response.title,
                        text: response.message,
                        icon: response.icon,
                    })
                    if (response.form_error === true) {
                        //console.log('remplir correctement le formulaire')
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

    close_dialog_form = () => {
        this.setState({

        idAttr:null,
        numero_attribution:'',
        nom_attribution:'',
        prenom_attribution:'',
        date_attribution:'',
        poste_attribution:'',
        missions_attribution:'',
        activite_attribution:'',
        superieur_attribution:'',
        diplome_attribution:'',
        autreComp_attribution:'',
    
        error_numero_attribution: null,
        error_nom_attribution: null,
        error_prenom_attribution: null,
        error_date_attribution: null,
        error_poste_attribution: null,
        error_missions_attribution: null,
        error_activite_attribution: null,
        error_superieur_attribution: null,
        error_diplome_attribution: null,
        error_autreComp_attribution: null,    
        })
        this.props.close_dialog_form()
    }
    Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    render() {

        return (
            <>
            <Dialog open={this.props.openattribuform} onClose={this.closeattribuadd} TransitionComponent={this.Transition} keepMounted >
                <DialogTitle><strong><center>MODIFICATION FICHE DE POSTE</center></strong></DialogTitle>
                <DialogContent>
                    <form>
                        <TextField name="nume_attribution" value={this.state.numero_attribution} onBlur={this.numero_attribution_verification} onFocus={() => { this.setState({ error_numero_attribution: null }) }} placeholder="ex : 01" onChange={this.change_numero_attribution} helperText={this.state.error_numero_attribution} error={this.state.error_numero_attribution ? (true) : (false)} type="numero" id="add_numero" label="Numero " fullWidth={true} />
                        <TextField name="nom_attribution" value={this.state.nom_attribution} onBlur={this.nom_attribution_verification} onFocus={() => { this.setState({ error_nom_attribution: null }) }} placeholder="ex : Giovanni" onChange={this.change_nom_attribution} helperText={this.state.error_nom_attribution} error={this.state.error_nom_attribution ? (true) : (false)} type="name" id="add_nom" label="Nom" fullWidth={true} />
                        <TextField name="prenom_attribution" value={this.state.prenom_attribution} onBlur={this.prenom_attribution_verification} onFocus={() => { this.setState({ error_prenom_attribution: null }) }} placeholder="ex : Andoniaina" onChange={this.change_prenom_attribution} helperText={this.state.error_prenom_attribution} error={this.state.error_prenom_attribution ? (true) : (false)} type="name" id="add_nom" label="Prenom" fullWidth={true} />
                        <MuiPickersUtilsProvider locale={fr} utils={DateFnsUtils}>
                        <FormLabel>Date </FormLabel>
                            <KeyboardDatePicker variant="dialog"
                            id="date-picker-dialog" format="dd MMMM yyyy"
                            maxDateMessage="date maximum depassée" 
                            onChange={this.change_date_attribution}
                            value={this.state.date_attribution} showTodayButton={true} 
                            cancelLabel="Annuler" okLabel="confirmer"
                            todayLabel="Aujourd'hui" invalidDateMessage="date invalide"
                            KeyboardButtonProps={{ 'aria-label': 'change date', }} fullWidth={true} />
                        </MuiPickersUtilsProvider>
                        <TextField name="poste_attribution" value={this.state.poste_attribution} onBlur={this.poste_attribution_verification} onFocus={() => { this.setState({ error_poste_attribution: null }) }} placeholder="ex : Poste" onChange={this.change_poste_attribution} helperText={this.state.error_poste_attribution} error={this.state.error_poste_attribution ? (true) : (false)} type="poste" id="poste_attribution" label="Poste" fullWidth={true} />                       
                        <TextField variant="outlined" name="missions" value={this.state.missions_attribution} onBlur={this.missions_attribution_verification} onFocus={() => { this.setState({ error_missions_attribution: null }) }} placeholder="ex : Missions ou Attributions" onChange={this.change_missions_attribution} helperText={this.state.error_missions_attribution} error={this.state.error_missions_attribution ? (true) : (false)} type="missions" id="missions_attribution" label="Missions" fullWidth={true} />
                        <TextField variant="outlined" name="activites" value={this.state.activite_attribution} onBlur={this.activite_attribution_verification} onFocus={() => { this.setState({ error_activite_attribution: null }) }} placeholder="ex : Activite Principales" onChange={this.change_activite_attribution} helperText={this.state.error_activite_attribution} error={this.state.error_activite_attribution ? (true) : (false)} type="activite" id="activite_attribution" label="Activite" fullWidth={true} />
                        <TextField name="superieur" value={this.state.superieur_attribution} onBlur={this.superieur_attribution_verification} onFocus={() => { this.setState({ error_superieur_attribution: null }) }} placeholder="ex : RH" onChange={this.change_superieur_attribution} helperText={this.state.error_superieur_attribution} error={this.state.error_superieur_attribution ? (true) : (false)} type="superieur" id="superieurr" label="Supérieur" fullWidth={true} />                            
                        <TextField name="diplome" value={this.state.diplome_attribution} onBlur={this.diplome_attribution_verification} onFocus={() => { this.setState({ error_diplome_attribution: null }) }} placeholder="ex : Doctorat" onChange={this.change_diplome_attribution} helperText={this.state.error_diplome_attribution} error={this.state.error_diplome_attribution ? (true) : (false)} type="diplome" id="diplome_attribution" label="Diplome" fullWidth={true} />
                        <TextField variant="outlined" name="autreCompe" value={this.state.autreComp_attribution} onBlur={this.autreComp_attribution_verification} onFocus={() => { this.setState({ error_autreComp_attribution: null }) }} placeholder="ex : competences" onChange={this.change_autreComp_attribution} helperText={this.state.error_autreComp_attribution} error={this.state.error_autreComp_attribution ? (true) : (false)} type="competence" id="competence_attribution" label="Competence" fullWidth={true} />
                    </form>
                    <DialogActions>
                            <Button color='primary' function={this.save_modify} name_of_btn="Enregistrer"  icon={<SaveIcon />} />
                            <Button color='secondary' function={this.close_dialog_form} name_of_btn="fermer" icon={<CancelIcon />}   />
                        </DialogActions>
                </DialogContent>
            </Dialog>
        </>
        )
    }
}

export default AttributionsForm