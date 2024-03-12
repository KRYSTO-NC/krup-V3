import React from 'react'
import { FaFacebook, FaInfo, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const CreateProfile = () => {
  return (
    <section className="container">
      <h1 className="large text-primary">Créer votre profile</h1>
      <p className="lead">
        <FaInfo /> Ajouter des informations pour que les gens puissent vous
        connaitre
      </p>

      <small>* = champs obligatoire</small>

      <form action="" className="form">

        <div className="form-group">
            <select name="status" id="">
                <option value="0">* Votre status pro</option>
                <option value="Gérant">Gérant</option>
                <option value="Employée">Employée</option>
                <option value="Enseignant">Enseignant</option>
                <option value="Etudiant">Etudiant</option>
                <option value="Commercant">Commercant</option>
                <option value="Agriculteur">Agriculteur</option>
                <option value="Artisan">Artisant</option>
                <option value="Artiste">Artiste</option>
            </select>
            <small>donnez nous une idée sur votre carrière proffesionnel</small>
        </div>

        <div className="form-group">
            <input type="text" placeholder="Société" name="company" />
            <small>Peut être votre propre société ou celle pour laquelle vous travaillez</small>
        </div>

        <div className="form-group">
            <input type="text" placeholder="Site web" name="website" />
            <small>Peut être votre propre site web ou celui de la société pour laquelle vous travaillez</small>
        </div>

        <div className="form-group">
            <input type="text" placeholder="votre adresse" name="address" />
            <small>(ex: 8 rue higginson, 98800, Nouméa, Nouvelle-Calédonie)</small>
        </div>

        <div className="form-group">
            <input type="text" placeholder="* Catégories de produits" name="categoryProduct" />
            <small>Veuillez utiliser des virgules pour séparer les valeurs (ex: Fruits,Légumes,Achards,Miel)</small>
        </div>

        <div className="form-group">
            <input type="phone" placeholder="phone" name="phone" />
            <small>Indiquez votre numéro de telephone</small>
        </div>

        <div className="form-group">
            <textarea name="bio" id="" cols="30" rows="5" placeholder="Une petite bio sur vous"></textarea>
            <small>Parlez nous un peu de vous</small>
        </div>

        <div className="form-group">
            <button className="btn btn-light">Ajouter les liens vers vos réseaux sociaux</button>
            <span>Optionnel</span>

        </div>

        <div className="form-group social-input twitter">
           <FaTwitter />
            <input type="text" placeholder="Twitter URL" name="twitter" />
        </div>
        <div className="form-group social-input facebook">
              <FaFacebook />
                <input type="text" placeholder="Facebook URL" name="facebook" />
        </div>
        <div className="form-group social-input linkedin">
              <FaLinkedin/>
                <input type="text" placeholder="Linkedin URL" name="linkedin" />
        </div>
        <div className="form-group social-input youtube">
              <FaYoutube/>
                <input type="text" placeholder="Youtube URL" name="youtube" />
        </div>
        <div className="form-group social-input instagram">
              <FaInstagram />
                <input type="text" placeholder="Instagram URL" name="instagram" />
        </div>
        <input style={{marginRight:"2rem"}} type="submit" className="btn btn-success my-1" />
        <Link className='btn btn-danger my-1'>  
            retour
        </Link>
      </form>
    </section>
  )
}

export default CreateProfile
