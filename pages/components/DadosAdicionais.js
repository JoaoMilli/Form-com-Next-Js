
import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from '@material-ui/core/TextField';
import { MuiThemeProvider } from 'material-ui/styles';
import { Box } from '@material-ui/system';


export default function DadosAdicionais(props) {

    const continuar = (e) => {
        e.preventDefault();
        props.nextStep();
    }

    const back = (e) =>{
        e.preventDefault();
        props.prevStep();
    }

    const styles = {
        button:{
            margin: 15
        }
    }

    const {values, handleChangeCargo, handleChangeCidade, handleChangeBio} = props;

    return(
        <MuiThemeProvider>
            <React.Fragment>
                <div className='pt-10'>
                    <h1 className='text-4xl font-bold dark:text-white mb-8'>Inscrição</h1>
                    <TextField
                        label='Insira o cargo pretendido'
                        floatingLabelText="Cargo"
                        onChange={e => handleChangeCargo(e)}
                        defaultValue={values.cargo}
                        fullWidth = {true}
                        margin="normal"
                        InputProps={{
                            style: {
                                color: "black"
                            }
                        }}
                    />
                    <TextField
                        label='Insira sua cidade'
                        floatingLabelText="Cidade"
                        onChange={e => handleChangeCidade(e)}
                        defaultValue={values.cidade}
                        fullWidth = {true}
                        margin="normal"
                        InputProps={{
                            style: {
                                color: "black"
                            }
                        }}
                    />
                    <TextField
                        label='Fale sobre você'
                        floatingLabelText="Bio"
                        onChange={e => handleChangeBio(e)}
                        defaultValue={values.bio}
                        fullWidth = {true}
                        multiline = {true}
                        margin="normal"
                        InputProps={{
                            style: {
                                color: "black"
                            }
                        }}
                    />

                    <Box textAlign='center'>
                        <RaisedButton variant='contained'
                            label="Voltar"
                            primary={true}
                            style={styles.button}
                            onClick={back}
                        />
                        <RaisedButton variant='contained'
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
