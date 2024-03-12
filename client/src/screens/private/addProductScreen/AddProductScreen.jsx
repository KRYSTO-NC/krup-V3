import React from 'react'
import { FaInfo } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const AddProductScreen = () => {
  return (
    <section className="container">
    <h1 className="large text-primary">Ajouter un produit</h1>
    <p className="lead">
      <FaInfo /> Ajouter un produit
    </p>

    <small>* = champs obligatoire</small>

    <form action="" className="form">
      <div className="form-group">
        <input type="text" placeholder="Nom du produit" />
      </div>

      <div className="form-group">
        <input type="number" placeholder="Prix" name="price" />
      </div>


 

      <div className="form-group">
          <textarea
              name="description"
              cols="30"
              rows="5"
              placeholder="Description du produit"
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

export default AddProductScreen