import React from 'react'
import { Link } from 'react-router-dom'

const RegisterSuccess = () => {
  return (
    <div className='container'>
        <h1 className='large text-primary'>Inscription réussie!</h1>
        <p className='lead'>
           plus que quelques étapes avant de commencer à utiliser votre compte.
        </p>
        <Link to={'/create-profile'} className='btn btn-success'> Créer votre profile</Link>
    </div>
  )
}

export default RegisterSuccess