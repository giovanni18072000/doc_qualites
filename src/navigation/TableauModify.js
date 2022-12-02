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
import { fr } from 'date-fns/locale';
import { FormLabel} from '@material-ui/core';
import Utilisateur from '../loginUsersInfo/usersConnected'

class TableauForm extends PureComponent {
    state = {
        idTab:null,
        identification_tableau:'',
        activite_tableau:'',
        pilote_tableau:'',
        type_tableau:'',
        date_debut_tableau:'',
        date_fin_tableau:'',
        trim_tableau:'',
        information_tableau:'',
        progression_tableau:'',
        pourcentage_tableau:'',

        error_identification_tableau: null,
        error_activite_tableau: null,
        error_pilote_tableau: null,
        error_type_tableau: null,
        error_date_debut_tableau: null,
        error_date_fin_tableau: null,
        error_trim_tableau: null,
        error_information_tableau: null,
        error_progression_tableau: null,
        error_pourcentage_tableau: null,

    }

    componentWillReceiveProps(nextprops) {
        //let bool = false
         console.log(nextprops.information_tableau)
        //if (nextprops.information_user.admin === 1) { bool = true }
        // console.log(nextprops.information_user.admin)
        this.setState({
            idTab: nextprops.information_tableau.id,      
            identification_tableau: nextprops.information_tableau.identifica_tableau,
            activite_tableau: nextprops.information_tableau.activi_tableau,
            pilote_tableau: nextprops.information_tableau.pilo_tableau,
            type_tableau: nextprops.information_tableau.ty_tableau,
            date_debut_tableau: nextprops.information_tableau.date_de_tableau,
            date_fin_tableau: nextprops.information_tableau.date_f_tableau,
            trim_tableau: nextprops.information_tableau.tri_tableau,
            information_tableau: nextprops.information_tableau.informa_tableau,
            progression_tableau: nextprops.information_tableau.progre_tableau,
            pourcentage_tableau: nextprops.information_tableau.pourcent_tableau
        })
    }

    change_identification_tableau = (e) => {
        this.setState({
            identification_tableau: e.target.value
        })
        //console.log(e.target);
    }
    change_activite_tableau = (e) => {
        this.setState({
            activite_tableau: e.target.value
        })
        //console.log(e.target);
    }
    change_pilote_tableau = (e) => {
        this.setState({
            pilote_tableau: e.target.value
        })
        //console.log(e.target);
    }
    change_type_tableau = (e) => {
        this.setState({
            type_tableau: e.target.value
        })
        //console.log(e.target);
    }
    change_date_debut_tableau = (date) => {
        this.setState({
            date_debut_tableau: new Date(date.getFullYear(), date.getMonth(), date.getDate())
        })
        //console.log(e.target);
    }
    change_date_fin_tableau = (date) => {
        this.setState({
            date_fin_tableau: new Date(date.getFullYear(), date.getMonth(), date.getDate())
        })
        //console.log(e.target);
    }
    change_trim_tableau = (e) => {
        this.setState({
            trim_tableau: e.target.value
        })
        //console.log(e.target);
    }
    change_information_tableau = (e) => {
        this.setState({
            information_tableau: e.target.value
        })
        //console.log(e.target);
    }
    change_progression_tableau = (e) => {
        this.setState({
            progression_tableau: e.target.value
        })
        //console.log(e.target);
    }
    change_pourcentage_tableau = (e) => {
        this.setState({
            pourcentage_tableau: e.target.value
        })
        //console.log(e.target);
    }

    identification_tableau_verification = () => {
        let identification_tableau_message = ''
        if (this.state.identification_tableau.length < 1) { identification_tableau_message = "identification trop court" }
        else if (this.state.identification_tableau.length > 10) { identification_tableau_message = "identification trop long" }
        else { identification_tableau_message = null }
        this.setState({
            error_identification_tableau: identification_tableau_message,
        })
    }
    activite_tableau_verification = () => {
        let activite_tableau_message = ''
        if (this.state.activite_tableau.length < 5) { activite_tableau_message = "activite trop court" }
        else if (this.state.activite_tableau.length > 255) { activite_tableau_message = "activite trop long" }
        else { activite_tableau_message = null }
        this.setState({
            error_activite_tableau: activite_tableau_message,
        })
    }
    pilote_tableau_verification = () => {
        let pilote_tableau_message = ''
        if (this.state.pilote_tableau.length < 2) { pilote_tableau_message = "pilote trop court" }
        else if (this.state.pilote_tableau.length > 10) { pilote_tableau_message = "pilote trop long" }
        else { pilote_tableau_message = null }
        this.setState({
            error_pilote_tableau: pilote_tableau_message,
        })
    }
    type_tableau_verification = () => {
        let type_tableau_message = ''
        if (this.state.type_tableau.length < 5) { type_tableau_message = "type trop court" }
        else if (this.state.type_tableau.length > 50) { type_tableau_message = "type trop long" }
        else { type_tableau_message = null }
        this.setState({
            error_type_tableau: type_tableau_message,
        })
    }
    trim_tableau_verification = () => {
        let trim_tableau_message = ''
        if (this.state.trim_tableau.length < 1) { trim_tableau_message = "trim trop court" }
        else if (this.state.trim_tableau.length > 10) { trim_tableau_message = "trim trop long" }
        else { trim_tableau_message = null }
        this.setState({
            error_trim_tableau: trim_tableau_message,
        })
    }
    information_tableau_verification = () => {
        let information_tableau_message = ''
        if (this.state.information_tableau.length < 5) { information_tableau_message = "information trop court" }
        else if (this.state.information_tableau.length > 255) { information_tableau_message = "information trop long" }
        else { information_tableau_message = null }
        this.setState({
            error_information_tableau: information_tableau_message,
        })
    }
    progression_tableau_verification = () => {
        let progression_tableau_message = ''
        if (this.state.progression_tableau.length < 5) { progression_tableau_message = "progression  trop court" }
        else if (this.state.progression_tableau.length > 50) { progression_tableau_message = "progression  trop long" }
        else { progression_tableau_message = null }
        this.setState({
            error_progression_tableau: progression_tableau_message,
        })
    }
    pourcentage_tableau_verification = () => {
        let pourcentage_tableau_message = ''
        if (this.state.pourcentage_tableau.length < 1) { pourcentage_tableau_message = "pourcentage trop court" }
        else if (this.state.pourcentage_tableau.length > 10) { pourcentage_tableau_message = "pourcentage trop long" }
        else { pourcentage_tableau_message = null }
        this.setState({
            error_pourcentage_tableau: pourcentage_tableau_message,
        })
    }

    save_modify = async () => {
        const data ={
            idTab : this.state.idTab,
            identification_Tableau: this.state.identification_tableau,
            activite_Tableau: this.state.activite_tableau,
            pilote_Tableau: this.state.pilote_tableau,
            type_Tableau: this.state.type_tableau,
            date_debut_Tableau: this.state.date_debut_tableau,
            date_fin_Tableau: this.state.date_fin_tableau,
            trim_Tableau: this.state.trim_tableau,
            information_Tableau: this.state.information_tableau,
            progression_Tableau: this.state.progression_tableau,
            pourcentage_Tableau: this.state.pourcentage_tableau,
        }

        if (this.state.identification_tableau  === '' || this.state.activite_tableau  === '' || this.state.pilote_tableau  === '' || this.state.type_tableau  === '' || this.state.trim_tableau  === '' || this.state.information_tableau  === ''|| this.state.progression_tableau  === ''|| this.state.pourcentage_tableau  === '') {
        Swal({
            title: 'Erreur',
            text: 'Veuillez remplir toutes les cases',
            icon: 'info',
            });
        }
        else { 
        let a = this.state
        if (a.error_identification_tableau === null && a.error_activite_tableau === null && a.error_pilote_tableau === null && a.error_type_tableau === null  
            && a.error_trim_tableau === null && a.error_information_tableau === null && a.error_progression_tableau === null && a.error_pourcentage_tableau === null) {
                try {
                    let send = await axios.put('http://localhost:3005/update_tableau',data);
                    let response  = await send.data;
                     if (response.success === true) {
                        //enregidtrement des nouvelle modification
                        Utilisateur.identification_Tableaus= this.state.identification_tableau;
                        Utilisateur.activite_Tableaus= this.state.activite_tableau;
                        Utilisateur.pilote_Tableaus= this.state.pilote_tableau;
                        Utilisateur.type_Tableaus= this.state.type_tableau;
                        Utilisateur.date_debut_Tableaus= this.state.date_debut_tableau;
                        Utilisateur.date_fin_Tableaus= this.state.date_fin_tableau;
                        Utilisateur.trim_Tableaus= this.state.trim_tableau;
                        Utilisateur.information_Tableaus= this.state.information_tableau;
                        Utilisateur.progression_Tableaus= this.state.progression_tableau;
                        Utilisateur.pourcentage_Tableaus= this.state.pourcentage_tableau
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

    close_dialog_form = () => {
        this.setState({
            idTab:null,
            identification_tableau:'',
            activite_tableau:'',
            pilote_tableau:'',
            type_tableau:'',
            date_debut_tableau:'',
            date_fin_tableau:'',
            trim_tableau:'',
            information_tableau:'',
            progression_tableau:'',
            pourcentage_tableau:'',
    
            error_identification_tableau: null,
            error_activite_tableau: null,
            error_pilote_tableau: null,
            error_type_tableau: null,
            error_date_debut_tableau: null,
            error_date_fin_tableau: null,
            error_trim_tableau: null,
            error_information_tableau: null,
            error_progression_tableau: null,
            error_pourcentage_tableau: null,   
        })
        this.props.close_dialog_form()
    }
    Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    render() {

        return (
            <>
            <Dialog open={this.props.opentableauform} onClose={this.closetableauadd} TransitionComponent={this.Transition} keepMounted >
                <DialogTitle><strong><center>MODIFICATION Informations</center></strong></DialogTitle>
                <DialogContent>
                    <form>
                        <TextField name="identification_tableau" value={this.state.identification_tableau} onBlur={this.identification_tableau_verification} onFocus={() => { this.setState({ error_identification_tableau: null }) }} placeholder="ex : 01" onChange={this.change_identification_tableau} helperText={this.state.error_identification_tableau} error={this.state.error_identification_tableau ? (true) : (false)} type="identification" id="add_identification" label="Identification " fullWidth={true} />
                        <TextField name="activite_tableau" value={this.state.activite_tableau} onBlur={this.activite_tableau_verification} onFocus={() => { this.setState({ error_activite_tableau: null }) }} placeholder="ex : indicateur" onChange={this.change_activite_tableau} helperText={this.state.error_activite_tableau} error={this.state.error_activite_tableau ? (true) : (false)} type="activite" id="add_activite" label="Activite" fullWidth={true} />
                        <TextField name="pilote_tableau" value={this.state.pilote_tableau} onBlur={this.pilote_tableau_verification} onFocus={() => { this.setState({ error_pilote_tableau: null }) }} placeholder="ex : Andoniaina" onChange={this.change_pilote_tableau} helperText={this.state.error_pilote_tableau} error={this.state.error_pilote_tableau ? (true) : (false)} type="pilote" id="add_pilote" label="Pilote" fullWidth={true} />
                        <TextField name="type_tableau" value={this.state.type_tableau} onBlur={this.type_tableau_verification} onFocus={() => { this.setState({ error_type_tableau: null }) }} placeholder="ex : Andoniaina" onChange={this.change_type_tableau} helperText={this.state.error_type_tableau} error={this.state.error_type_tableau ? (true) : (false)} type="type" id="type" label="Type" fullWidth={true} />
                        <MuiPickersUtilsProvider locale={fr} utils={DateFnsUtils}>
                        <FormLabel>Date Debut</FormLabel>
                            <KeyboardDatePicker variant="dialog"
                            id="date-picker-dialog" format="dd MMMM yyyy"
                            maxDateMessage="date maximum depassée" 
                            onChange={this.change_date_debut_tableau}
                            value={this.state.date_debut_tableau} showTodayButton={true} 
                            cancelLabel="Annuler" okLabel="confirmer"
                            todayLabel="Aujourd'hui" invalidDateMessage="date invalide"
                            KeyboardButtonProps={{ 'aria-label': 'change date', }} fullWidth={true} />
                        </MuiPickersUtilsProvider><br/>
                        <MuiPickersUtilsProvider locale={fr} utils={DateFnsUtils}>
                        <FormLabel>Date Fin</FormLabel>
                            <KeyboardDatePicker variant="dialog"
                            id="date-picker-dialog" format="dd MMMM yyyy"
                            maxDateMessage="date maximum depassée" 
                            onChange={this.change_date_fin_tableau}
                            value={this.state.date_fin_tableau} showTodayButton={true} 
                            cancelLabel="Annuler" okLabel="confirmer"
                            todayLabel="Aujourd'hui" invalidDateMessage="date invalide"
                            KeyboardButtonProps={{ 'aria-label': 'change date', }} fullWidth={true} />
                        </MuiPickersUtilsProvider><br/>
                        <TextField name="trim_tableau" value={this.state.trim_tableau} onBlur={this.trim_tableau_verification} onFocus={() => { this.setState({ error_trim_tableau: null }) }} placeholder="ex : 0" onChange={this.change_trim_tableau} helperText={this.state.error_trim_tableau} error={this.state.error_trim_tableau ? (true) : (false)} type="trim" id="trim_tableau" label="Trim" fullWidth={true} />                       
                        <TextField variant="outlined" name="information_tableau" value={this.state.information_tableau} onBlur={this.information_tableau_verification} onFocus={() => { this.setState({ error_information_tableau: null }) }} placeholder="ex : Missions ou Attributions" onChange={this.change_information_tableau} helperText={this.state.error_information_tableau} error={this.state.error_information_tableau ? (true) : (false)} type="information_tableau" id="information_tableau" label="information_tableau" fullWidth={true} />
                        <TextField variant="outlined" name="progression_tableau" value={this.state.progression_tableau} onBlur={this.progression_tableau_verification} onFocus={() => { this.setState({ error_progression_tableau: null }) }} placeholder="ex : Activite Principales" onChange={this.change_progression_tableau} helperText={this.state.error_progression_tableau} error={this.state.error_progression_tableau ? (true) : (false)} type="progression_tableau" id="progression_tableau" label="Activite" fullWidth={true} />
                        <TextField name="pourcentage_tableau" value={this.state.pourcentage_tableau} onBlur={this.pourcentage_tableau_verification} onFocus={() => { this.setState({ error_pourcentage_tableau: null }) }} placeholder="ex : RH" onChange={this.change_pourcentage_tableau} helperText={this.state.error_pourcentage_tableau} error={this.state.error_pourcentage_tableau ? (true) : (false)} type="pourcentage_tableau" id="pourcentage_tableaur" label="Supérieur" fullWidth={true} />                            
                    </form>
                    <DialogActions>
                        <Button color='primary' function={this.save_modify} name_of_btn="Enregistrer" icon={<SaveIcon />}/>
                        <Button color='secondary'  function={this.close_dialog_form} name_of_btn="fermer" icon={<CancelIcon />}/>
                    </DialogActions>
                </DialogContent>
            </Dialog>
        </>
        )
    }
}

export default TableauForm