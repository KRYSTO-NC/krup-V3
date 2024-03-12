import React from 'react'

const ResetPasswordScreen = () => {
  return (
    <section className='container center-y'>
        <h1 className='large text-primary'>Renitialisation de votre mot de passe</h1>
        <p className="lead">
            Veuillez saisir votre adresse email pour recevoir un lien de réinitialisation de votre mot de passe.
        </p>

        <form className="form" action="create-profile.html">
            <div className="form-group">
                <input type="email" placeholder="Adresse email" name="email" required />
            </div>
            <input type="submit" className="btn btn-primary" value="Envoyer" />
        </form>
    </section>
  )
}

export default ResetPasswordScreen