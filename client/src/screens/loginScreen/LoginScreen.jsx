import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials, setAlert, clearAlert } from '../../slices/authSlice';

import Alert from '../../components/shared/alert/Alert';
import { useLoginMutation } from '../../slices/userApiSlice';


const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const { message, type } = useSelector((state) => state.alert);

  const [login, { isLoading, error }] = useLoginMutation();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));

      // Dispatch a success alert
      dispatch(setAlert({ message: 'Connexion réussie!', type: 'success' }));

      // Clear the alert after 3 seconds
      setTimeout(() => dispatch(clearAlert()), 3000);
    } catch (error) {
      if (error.status === 404) {
        // Handle 404 error (Not Found)
        dispatch(setAlert({ message: 'La route de connexion n\'a pas été trouvée.', type: 'danger' }));
      } else {
        // Dispatch a generic error alert
        dispatch(setAlert({ message: 'Identifiants de connexion non valides', type: 'danger' }));
      }
    }
  };

  return (
    <section className='container'>
      {/* Display the alert if there is a message */}
      {message && <Alert text={message} type={type} />}

      <h1 className='large text-primary'>Connexion</h1>
      <p className='lead'>
        {' '}
        <FaUser /> Connectez-vous pour commencer{' '}
      </p>

      <form className='form' onSubmit={submitHandler}>
        <div className='form-group'>
          <label htmlFor='email'>Adresse email</label>
          <input
            type='email'
            id='email'
            placeholder='Adresse email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Mot de passe</label>
          <input
            type='password'
            id='password'
            placeholder='Votre mot de passe'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
          />
        </div>

        <button
          type='submit'
          className='btn btn-primary'
          disabled={isLoading}
        >
          {isLoading ? 'Connexion en cours...' : 'Connexion'}
        </button>
      </form>

      <p className='my-1 s-small '>
        Pas encore inscrit? <Link to='/register'>S'inscrire</Link>
      </p>
      <p className='my-1 s-small '>
        J'ai oublié mon mot de passe{' '}
        <Link className='text-danger' to='/resetPassword'>
          cliquez ici pour en créer un nouveau
        </Link>
      </p>
    </section>
  );
};

export default LoginScreen;
