
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class DadosAdicionais extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const {values, handleChange} = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Dados adicionais"></AppBar>
                    <TextField
                        hintText='Insira o cargo pretendido'
                        floatingLabelText="Cargo"
                        onChange={handleChange('cargo')}
                        defaultValue={values.cargo}
                    />
                    <br/>
                    <TextField
                        hintText='Insira sua cidade'
                        floatingLabelText="Cidade"
                        onChange={handleChange('cidade')}
                        defaultValue={values.cidade}
                    />
                    <br/>
                    <TextField
                        hintText='Fale sobre você'
                        floatingLabelText="Bio"
                        onChange={handleChange('bio')}
                        defaultValue={values.bio}
                    />
                    <br/>
                    <RaisedButton
                        label="Confirmar"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                    <br/>
                    <RaisedButton
                        label="Voltar"
                        primary={true}
                        style={styles.button}
                        onClick={this.back}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button:{
        margin: 15
    }
}

export default DadosAdicionais
