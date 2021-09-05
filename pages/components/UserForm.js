import React, { Component } from 'react'
import DadosPrincipais from './DadosPrincipais'
import DadosAdicionais from './DadosAdicionais'
import Confirmar from './Confirmar'
import Sucesso from './Sucesso'


export class UserForm extends Component {
    state={
        step: 1,
        nome: '',
        email:'',
        cargo:'',
        cidade:'',
        bio:'',
    }

    nextStep = () =>{
        const {step} = this.state;
        this.setState({
            step: step + 1
        });
    }

    prevStep = () =>{
        const {step} = this.state;
        this.setState({
            step: step - 1
        });
    }

    handleChange = input => e =>{
        this.setState({[input]: e.target.value})
    }

    resetChange = input => {
        this.setState({[input]: ''})
    }

    handleSubmit = (e) => { 
        e.preventDefault()
        console.log('Sending')

        const {nome, email, cargo, cidade, bio} = this.state;
    
        let data = {
            nome,
            email,
            cargo,
            cidade,
            bio
        }
    
        fetch('../api/contact', {
            method: 'POST',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
          console.log('Response received')
          if (res.status === 200) {
            console.log('Response succeeded!')
            this.resetChange('nome')
            this.resetChange('email')
            this.resetChange('cargo')
            this.resetChange('cidade')
            this.resetChange('bio')
          }
        })
    }

    render() {
        const {step, nome, email, cargo, cidade, bio} = this.state;
        const values = {step, nome, email, cargo, cidade, bio}

        switch(step){
            case 1:
                return(
                    <DadosPrincipais
                        nextStep = {this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return(
                    <DadosAdicionais
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 3:
                return(
                    <Confirmar
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        handleSubmit = {this.handleSubmit}
                        resetChange={this.resetChange}
                        values={values}
                    />
                )
            case 4:
                return(
                    <Sucesso/>

                )
        }
    }
}

export default UserForm
