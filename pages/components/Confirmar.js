
import React from 'react';
import {List} from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";


const CenteredListItemText = withStyles({
    root: {
      textAlign: "center",
      marginTop: "20px",
      marginRight:"80px"
    }
})(ListItemText);

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
        <Grid container direction ="column" alignItems="center">   
            <h1>Confirme seus dados</h1>
                <List>
                    <CenteredListItemText
                        inset={true}
                        primary="Nome"
                        secondary={nome}
                    />
                    <CenteredListItemText
                        inset={true}
                        primary="Email"
                        secondary={email}
                    />
                    <CenteredListItemText
                        inset={true}
                        primary="Cargo pretendido"
                        secondary={cargo}
                    />
                    <CenteredListItemText
                        inset={true}
                        primary="Cidade"
                        secondary={cidade}
                    />
                    <CenteredListItemText
                        inset={true}
                        primary="Bio"
                        secondary={bio}
                    />
                </List>
            <Grid container justifyContent = "center">      
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
        </Grid>
    )
    
}

const styles = {
    button:{
        margin: 15
    }
}

