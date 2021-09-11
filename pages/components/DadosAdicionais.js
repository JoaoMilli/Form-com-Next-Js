
import React from 'react';
import {TextField} from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Grid } from '@material-ui/core';



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
        <React.Fragment>
            <h1>Inscrição</h1>
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

            <Grid container justify = "center">
                
                <Button
                    children="Voltar"
                    style={styles.button}
                    onClick={back}
                />
                <Button
                    children="Continuar"
                    style={styles.button}
                    onClick={continuar}
                />
                                    
            </Grid>
        </React.Fragment>
    )
}
