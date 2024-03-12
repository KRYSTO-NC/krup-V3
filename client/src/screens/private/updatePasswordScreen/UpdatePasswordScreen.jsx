import React from 'react'

const UpdatePasswordScreen = () => {
  return (
    <section className="container">
      <h1 className="large text-primary">Modifier mon mot de passe</h1>
      <p className="lead">Modifier votre mot de passe ici.</p>
      <form action="" className="form">
        <div className="form-group">
          <input
            type="password"
            placeholder="Mot de passe actuel"
            name="password"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Nouveau mot de passe"
            name="password"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirmer le nouveau mot de passe"
            name="password"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Modifier" />
      </form>
    </section>
  )
}

export default UpdatePasswordScreen
