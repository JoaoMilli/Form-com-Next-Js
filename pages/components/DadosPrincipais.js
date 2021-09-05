
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class DadosPrincipais extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();

    }

    render() {
        const {values, handleChange} = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Dados principais"></AppBar>
                    <TextField
                        hintText='Insira seu nome'
                        floatingLabelText="Nome"
                        onChange={handleChange('nome')}
                        defaultValue={values.nome}
                    />
                    <br/>
                    <TextField
                        hintText='Insira seu Email'
                        floatingLabelText="Email"
                        onChange={handleChange('email')}
                        defaultValue={values.email}
                    />
                    <br/>
                    <RaisedButton
                        label="Continuar"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
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

export default DadosPrincipais
