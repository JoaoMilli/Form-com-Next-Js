import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import UserForm from './components/UserForm'

export default function Home() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => { 
    e.preventDefault()
    console.log('Sending')

    let data = {
        name,
        email,
        message
    }

    fetch('/api/contact', {
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
        setSubmitted(true)
        setName('')
        setEmail('')
        setMessage('')
      }
    })
  }

  return (
    <>
      <UserForm/>
      <div className={styles.container}>
        <form className={styles.main}>

          < formGroup className={styles.inputGroup}>
            <label htmlFor='nome'>Nome</label>
            <input type='text' name= 'name' onChange={(e)=>{setName(e.target.value)}} className= {styles.inputField}/>
            </formGroup>

          < formGroup className={styles.inputGroup}>
            <label htmlFor='email'>Email</label>
            <input type='email' name= 'email' 
            onChange={(e)=>{setEmail(e.target.value)}} className= {styles.inputField}/>
          </formGroup>

          < formGroup className={styles.inputGroup}>
            <label htmlFor='mensagem'>Mensagem</label>
            <input type='text' name= 'mensagem' 
            onChange={(e)=>{setMessage(e.target.value)}} className= {styles.inputField}/>
          </formGroup>

          <input type='submit' onClick={(e)=>{handleSubmit(e)}}/>

        </form>
      </div>
    </>
  )
}
