
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List,ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

export class Confirmar extends Component {

    
    continue = e => {
        e.preventDefault();
        this.props.handleSubmit(e);
        this.props.nextStep();

    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const {values: {nome, email, cargo, cidade, bio}} = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirme seus dados"></AppBar>
                    <List>
                        <ListItem
                            primaryText="Nome"
                            secondaryText={nome}
                        />
                        <ListItem
                            primaryText="Email"
                            secondaryText={email}
                        />
                        <ListItem
                            primaryText="Cargo pretendido"
                            secondaryText={cargo}
                        />
                        <ListItem
                            primaryText="Cidade"
                            secondaryText={cidade}
                        />
                        <ListItem
                            primaryText="Bio"
                            secondaryText={bio}
                        />
                    </List>
                    <br/>
                    <RaisedButton
                        label="Continuar"
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

export default Confirmar
