import React, { useState } from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

function PasswordForm(props) {

    const [values, setValues] = useState({
        showPassword: false,
    });
    const showPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };
 
    const hidePassword = (e) => {
        e.preventDefault();
    };

    // const useStyles = makeStyles((theme) => ({
    //     root: {
    //         display: 'flex',
    //         flexWrap: 'wrap',
    //     },
    //     margin: {
    //         margin: theme.spacing(1),
    //     },
    //     withoutLabel: {
    //         marginTop: theme.spacing(3),
    //     },
    //     textField: {
    //         width: '100%',
    //     },
    // }));
    // const classes = useStyles();
    return (
        <FormControl >
            {/* <FormControl className={clsx(classes.textField)}> */}
            <InputLabel htmlFor="standard-adornment-password">Mot de passe</InputLabel>
            <Input
                id="standard-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                value= {props.password}
                onChange={props.changePass}
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
    )
}

export default React.memo(PasswordForm)