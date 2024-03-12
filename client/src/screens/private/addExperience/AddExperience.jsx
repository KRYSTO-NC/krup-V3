import React from 'react'
import {
  FaBlackTie,
  FaFacebook,
  FaGraduationCap,
  FaInfo,
  FaInstagram,
  FaLinkedin,
  FaTrash,
  FaTwitter,
  FaUserCircle,
  FaYoutube,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const AddExperience = () => {
  return (
    <section className="container">
      <h1 className="large text-primary">Ajouter une experience</h1>
      <p className="lead">
        <FaInfo /> ajouter une experience
      </p>

      <small>* = champs obligatoire</small>

      <form action="" className="form">
        <div className="form-group">
          <input type="text" placeholder="job title" />
        </div>

        <div className="form-group">
          <input type="text" placeholder="Société" name="company" />
        </div>

        <div className="form-group">
          <input type="text" placeholder="Lieu" name="location" />
          <small>Ville et Pays (ex: Nouméa, Province-Sud)</small>
        </div>

    
        <div className="form-group">
          <label htmlFor="from">Date de début</label>
          <input type="date" placeholder="from" name="from" />
        </div>
        <div className="form-group">
          <label htmlFor="to">Date de fin</label>
          <input type="date" placeholder="from" name="from" />
        </div>

        <div className="form-group">
            <input
                type="checkbox"
                name="current"
            />
            <label htmlFor="current">En cours</label>
        </div>

        <div className="form-group">
            <textarea
                name="description"
                cols="30"
                rows="5"
                placeholder="Description du poste"
            ></textarea>
        </div>


        <input
          style={{ marginRight: '2rem' }}
          type="submit"
          className="btn btn-success my-1"
        />
        <Link className="btn btn-danger my-1">retour</Link>
      </form>
    </section>
  )
}

export default AddExperience
