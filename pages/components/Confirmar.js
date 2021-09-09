
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List,ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import { Box } from '@material-ui/system';

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

export default function Confirmar (props) {

    
    const continuar = (e) => {
        e.preventDefault();
        props.handleSubmit(e);
        props.nextStep();

    }

    const back = (e) => {
        e.preventDefault();
        props.prevStep();
    }

    const {values: {nome, email, cargo, cidade, bio}} = props;
    return (
        <MuiThemeProvider>
            <React.Fragment>
                <Box textAlign='center'>
                    <h1 className='text-4xl font-bold dark:text-white mb-8'>Confirme seus dados</h1>
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
                    <RaisedButton
                        label="Voltar"
                        primary={true}
                        style={styles.button}
                        onClick={back}
                    />
                    <RaisedButton
                        label="Continuar"
                        primary={true}
                        style={styles.button}
                        onClick={continuar}
                    />
                </Box>
            </React.Fragment>
        </MuiThemeProvider>
    )
    
}

const styles = {
    button:{
        margin: 15
    }
}

