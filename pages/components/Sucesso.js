
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


export class Sucesso extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();

    }

    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Sucesso"/>
                    <h1>Obrigado por participar!</h1>
                    <p>Você receberá um email contendo instruções</p>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default Sucesso
