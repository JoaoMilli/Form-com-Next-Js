import React, { useState } from 'react'
import DadosPrincipais from './DadosPrincipais'
import DadosAdicionais from './DadosAdicionais'
import Confirmar from './Confirmar'
import Sucesso from './Sucesso'


export default function UserForm () {


    const [step, setStep] = useState(1);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cargo, setCargo] = useState('');
    const [cidade, setCidade] = useState('');
    const [bio, setBio] = useState('');

    const nextStep = () =>{
        setStep(step + 1)
    }

    const prevStep = () =>{
        setStep(step - 1)
    }

    const handleChangeNome = e =>{
        setNome(e.target.value)
    }

    const handleChangeEmail = e =>{
        setEmail(e.target.value)
    }

    const handleChangeCargo = e =>{
        setCargo(e.target.value)
    }

    const handleChangeCidade = e =>{
        setCidade(e.target.value)
    }

    const handleChangeBio = e =>{
        setBio(e.target.value)
    }

    const resetChange = () => {
        setNome('')
        setEmail('')
        setCargo('')
        setCidade('')
        setBio('')
    }

    const handleSubmit = e => { 
        e.preventDefault()
        console.log('Sending')

        //const {nome, email, cargo, cidade, bio} = nome, email, cargo, cidade, bio;
    
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
            resetChange()
          }
        })
    }

    const values = {step, nome, email, cargo, cidade, bio}

    switch(step){
        case 1:
            return(
                <DadosPrincipais
                    nextStep = {nextStep}
                    handleChangeNome={handleChangeNome}
                    handleChangeEmail={handleChangeEmail}
                    values={values}
                />
            )
        case 2:
            return(
                <DadosAdicionais
                    nextStep = {nextStep}
                    prevStep = {prevStep}
                    handleChangeCargo={handleChangeCargo}
                    handleChangeCidade={handleChangeCidade}
                    handleChangeBio={handleChangeBio}
                    values={values}
                />
            )
        case 3:
            return(
                <Confirmar
                    nextStep = {nextStep}
                    prevStep = {prevStep}
                    handleSubmit = {handleSubmit}
                    resetChange={resetChange}
                    values={values}
                />
            )
        case 4:
            return(
                <Sucesso/>

            )
    }
}
