
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Box } from '@material-ui/system';

export default function DadosPrincipais(props) {

    const continuar = (e) => {
        e.preventDefault();
        props.nextStep();

    }

    const {values, handleChangeNome, handleChangeEmail} = props;

    return (
        <MuiThemeProvider>
            <React.Fragment>
                <div className='pt-10'>
                    <h1 className='text-4xl font-bold dark:text-white mb-8'>Dados Principais</h1>
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
                    <Box textAlign='center'>
                        <RaisedButton
                            label="Continuar"
                            primary={true}
                            style={styles.button}
                            onClick={continuar}
                        />
                    </Box>
                </div>
            </React.Fragment>
        </MuiThemeProvider>
    )
}

const styles = {
    button:{
        margin: 15
    }
}
