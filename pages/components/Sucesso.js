
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default function Sucesso(props) {

    const continuar = (e) => {
        e.preventDefault();
        props.nextStep();

    }

    return (
        <MuiThemeProvider>
            <React.Fragment>
                <h1 className='text-4xl font-bold dark:text-white mb-8'>Sucesso</h1>
                <h1>Obrigado por participar!</h1>
                <p>Você receberá um email contendo instruções</p>
            </React.Fragment>
        </MuiThemeProvider>
    )
}

