import { useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { setCredentials } from '../../slices/authSlice';
import { setAlert, clearAlert } from '../../slices/alertSlice';  
import { useRegisterMutation } from '../../slices/userApiSlice';
import Alert from '../../components/shared/alert/Alert';

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [register, { isLoading }] = useRegisterMutation();
  const { userInfo } = useSelector((state) => state.auth);
  const alert = useSelector((state) => state.alert);
  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get('redirect') || '/register-success';

  useEffect(() => {
    if (userInfo && redirect && alert.type === 'success') {
      setTimeout(() => {
        navigate(redirect);
      }, 4000);
    }
  }, [userInfo, redirect, navigate, alert]);

  // Clear the alert after 3 seconds
setTimeout(() => dispatch(clearAlert()), 4000);

const submitHandler = async (e) => {
  e.preventDefault();

  if (password !== confirmPassword) {
    // Dispatch an alert for password mismatch
    dispatch(setAlert({ message: 'Les mots de passe ne correspondent pas', type: 'danger' }));
  } else if (!role) {
    // Dispatch an alert for role not selected
    dispatch(setAlert({ message: 'Veuillez sélectionner votre rôle', type: 'danger' }));
  } else {
    try {
      const res = await register({ name, email, password, role }).unwrap();
      dispatch(setCredentials({ ...res }));
      // Dispatch a success alert
      dispatch(setAlert({ message: 'Inscription réussie!', type: 'success' }));
      // Clear the alert after 3 seconds
      setTimeout(() => dispatch(clearAlert()), 4000);
    } catch (err) {
      // Dispatch an error alert
      dispatch(setAlert({ message: 'Une erreur est survenue lors de l\'inscription', type: 'danger' }));
    }
  }
};

  return (
    <section className="container">
      {/* Display the alert if there is a message */}
      {alert.message && <Alert text={alert.message} type={alert.type} />}
      <h1 className="large text-primary">S'inscrire</h1>
      <p className="lead">
        {' '}
        <FaUser /> Créer un compte{' '}
      </p>

      <form className="form" onSubmit={submitHandler}>
        <div className="form-group">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nom"
            id="name"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Adresse email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <small className="form-text">
            Ce site utilise Gravatar, donc si vous voulez une image de profil,
            utilisez un email{' '}
            <Link target="_blank" to={'https://gravatar.com/'}>
              Gravatar
            </Link>
          </small>
        </div>
        <div className="form-group">
          <select
           value={role}
           onChange={(e) => setRole(e.target.value)}
          >
            <option value="0">* Selectionner votre role</option>
            <option value="user">Particulier</option>
            <option value="Artisan/Producteur">Artisan/Producteur</option>
            <option value="Revendeur">Revendeur</option>
            <option value="Prestataire">Organisateur de salons/Marché</option>

          </select>
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Votre mot de passe"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="confirmer votre mot de passe"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            minLength={6}
            required
          />
        </div>
        <div className="form-group">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isLoading}
            >
              S'inscrire
            </button>
          </div>
      </form>
      <p className="my-1 s-small ">
        Vous avez déjà un compte? <Link to="/login">Connexion</Link>
      </p>
    </section>
  )
}

export default RegisterScreen
