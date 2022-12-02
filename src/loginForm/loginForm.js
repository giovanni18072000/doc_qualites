import React, { useState } from 'react'
import { DialogActions, TextField, Dialog,DialogContent } from '@material-ui/core'
import Utilisateur from '../loginUsersInfo/usersConnected'
import Button from '../button/button'
import Swal from 'sweetalert'
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
//import io, { Socket }  from 'socket.io-client';
import axios from 'axios';

function Login() {
    const [values,setValues]=useState({
        username:'',
        password:'',
        showPassword: false,
    })
    // const [username, setUsername] = useState("");
    // const [room, setRoom] = useState("");

    // const joinRoom = () => {
    //     if (username !== "" && room !== ""){
    //         Socket.emit("join_room",room)
    //     }
    // }

    const updateStateFunction = (prop) => (e) =>{
        setValues({...values, [prop]: e.target.value});
    };

    
    const showPassword = () => {
        setValues({...values, showPassword: !values.showPassword});
    }

    const hidePassword = (e) =>{
        e.preventDefault();
    };

        const connect = async () => {
            const data = {
                username: values.username,
                password: values.password
            }
        if (values.username === '' || values.password === '') {
            Swal({
                title: 'Information',
                text: 'Authentification obligatoire',
                icon: 'error',
            })
        }
        else {
            try {
                //envoyer des donnees dans le back end 
                let connection = await axios.post('http://localhost:3005/login',data);
                let response  = await connection.data;
               
                let admin = '';
                //verification des information
                if (response && response.success === true) {
                    //l'utilisateur existe 
                    if (admin === 0) { admin = false }
                    else { admin = true }
                    Utilisateur.loading = false;
                    Utilisateur.isLoggedIn = true;
                    Utilisateur.username = response.username;
                    Utilisateur.admin = admin;
                    Utilisateur.usersInformation = response.usersInformation;
                    Utilisateur.id_users = response.usersInformation.id;
                    Utilisateur.prenom_users = response.usersInformation.prenom_d_utilisateur;
                    Utilisateur.email_users = response.usersInformation.email;
                    Utilisateur.whatsapp = response.usersInformation.whatsapp;
                    Utilisateur.password = response.usersInformation.password;
                    Utilisateur.contact = response.usersInformation.contact;
                    
                    console.log( admin +"nnnnnnnnnnnnnnnn")
                }
                else {
                    //mot de passe incorecte ou nom d'utilisateur incorrecte
                    Swal({
                        title: response.title,
                        text: response.message,
                        icon: response.icon,
                    })
                    values.username = '';
                    values.password = '';
                }
            }
            catch (e) { throw e }
        }

    }
    return (
        <div>
            <Dialog open={true} fullWidth={true}><br/>
            <center>
                    <img src="../../images/apmf1.jfif" alt="logo"/>
            </center>
                <DialogContent>
                    <FormControl  fullWidth={true}>
                        <TextField required={true} value={values.username} name="username" onChange={updateStateFunction('username')} placeholder="Nom d'utilisateur ou e-mail ou contact" type="text" id="nom_d_utilisateur" label="Adresse electronique" fullWidth={true}/>
                    </FormControl><br/>
                    <FormControl fullWidth={true}>
                        <InputLabel htmlFor="standard-adornment-password">Mot de passe</InputLabel>
                        <Input
                            id="standard-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={updateStateFunction('password')}
                            placeholder="votre mot de passe"
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={showPassword}
                                        onMouseDown={hidePassword}
                                    >
                                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </DialogContent>
                <br/> <br/>
                <FormControl >
                    <DialogActions>
                        <Button color='primary' function={connect} name_of_btn="se connecter" />
                    </DialogActions>

                </FormControl> <br/>
            </Dialog>
            
            {/* <div className="container-scroller">
                <div className="container-fluid page-body-wrapper full-page-wrapper">
                    <div className="content-wrapper d-flex align-items-center auth px-0">
                        <div className="row w-100 mx-0">
                            <div className="col-lg-4 mx-auto">
                            <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                            <div className="brand-logo">
                                <center>
                                    <img src="../../images/apmf1.jfif" alt="logo"/>
                                </center>
                            </div>
                            <form className="pt-3">
                                <FormControl fullWidth={true}>
                                <TextField  value={values.username} name="username" onChange={updateStateFunction('username')} placeholder="Nom d'utilisateur ou e-mail ou contact" type="text" id="nom_d_utilisateur" label="Adresse electronique" />
                                </FormControl>
                                <FormControl fullWidth={true}>
                                    <InputLabel htmlFor="standard-adornment-password">Mot de passe</InputLabel>
                                        <Input
                                            id="standard-adornment-password"
                                            type={values.showPassword ? 'text' : 'password'}
                                            value={values.password}
                                            onChange={updateStateFunction('password')}
                                            placeholder="votre mot de passe"
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={showPassword}
                                                        onMouseDown={hidePassword}
                                                    >
                                                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                    />
                                </FormControl>
                                <br/><br/><br/>
                                <center >
                                <FormControl >
                                    <DialogActions>
                                        <Button color='primary' function={connect} name_of_btn="se connecter" fullWidth={true}/>
                                    </DialogActions>
                                </FormControl>
                                </center>
                            </form>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div> 
            </div> */}
            </div>
    )

}

export default Login
