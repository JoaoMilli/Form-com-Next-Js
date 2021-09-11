
import React from 'react';
import {TextField} from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Grid } from '@material-ui/core';

export default function DadosPrincipais(props) {

    const continuar = (e) => {
        e.preventDefault();
        props.nextStep();

    }

    const {values, handleChangeNome, handleChangeEmail} = props;

    return (
        <React.Fragment>
            <h1>Dados Principais</h1>
            <TextField
                label='Insira seu nome'
                floatingLabelText="Nome"
                onChange={e => handleChangeNome(e)}
                defaultValue={values.nome}
                fullWidth = {true}
                margin="normal"
                InputProps={{
                    style: {
                        color: "black"
                    }
                }}
            />
            
            <TextField
                label='Insira seu Email'
                floatingLabelText="Email"
                onChange={e => handleChangeEmail(e)}
                defaultValue={values.email}
                fullWidth = {true}
                margin="normal"
                InputProps={{
                    style: {
                        color: "black"
                    }
                }}
            />
            <Grid container justify = "center">
            
                <Button
                    children="Continuar"
                    style={styles.button}
                    onClick={continuar}
                />
            
            </Grid>
        </React.Fragment>
    )
}

const styles = {
    button:{
        margin: 15
    }
}
