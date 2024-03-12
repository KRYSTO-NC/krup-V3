import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import { FaTimes } from 'react-icons/fa'
import {
  useGetProductQuery,
  useUpdateProductMutation,
  useUploadProductImageMutation,
} from '../../../slices/productApiSlice'

const ProductEditScreen = () => {
  const { id: productId } = useParams()

  console.log(productId)
  const [loadingUpdate, setLoadingUpdate] = useState(false)
  const [loadingUpload, setLoadingUpload] = useState(false)

  const { data: product, isLoading, refetch, error } = useGetProductQuery(
    productId,
  )
            
  const [
    updateProduct,
    { isLoading: updateMutationLoading },
  ] = useUpdateProductMutation()

  const [
    uploadProductImage,
    { isLoading: uploadMutationLoading },
  ] = useUploadProductImageMutation()

  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [imagesArray, setImagesArray] = useState([])
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('Autre')



  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoadingUpdate(true);
  
      if (productId) {
        const data = {
          name,
          price,
          category,
          images: imagesArray,
          description,
        };
  
        console.log('Data before update:', data);
  
        await updateProduct({
          productId,
          data,
        }).unwrap();
  
        console.log('Product updated successfully!');
      } else {
        console.error('productId is undefined.');
      }
  
      refetch();
      navigate('/products');
    } catch (err) {
      console.error('Error updating product:', err);
    } finally {
      setLoadingUpdate(false);
    }
  };
  const uploadFileHandler = async (e) => {
    const formData = new FormData()
    formData.append('images', e.target.files[0])

    try {
      setLoadingUpload(true)
      const res = await uploadProductImage(formData).unwrap()
      setImagesArray((prevImages) => [...prevImages, ...res.images])
    } catch (err) {
    } finally {
      setLoadingUpload(false)
    }
  }

  const removeImage = (index) => {
    const newImagesArray = [...imagesArray]
    newImagesArray.splice(index, 1)
    setImagesArray(newImagesArray)
  }

  useEffect(() => {
    setName(product?.data.name || '')
    setPrice(product?.data.price || 0)
    setImagesArray(product?.data.images || [])
    setDescription(product?.data.description || '')
    setCategory(product?.data.category || 'Autre')
  }, [product])

  return (
    <section className="container">
      {loadingUpdate && <p>Loading...</p>}
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <div variant="danger">{error.data.message}</div>
      ) : (
        <>
          <h1>Modifier le produit</h1>

          <form className="form" onSubmit={submitHandler}>
            <div className="form-group">
              <label htmlFor="name">Nom:</label>
              <input
                type="text"
                id="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="category">Catégorie:</label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >


                <option value="Autre">Autre</option>
                <option value="Fruits & Légumes">Fruits & Légumes</option>
                <option value="Mode">Mode</option>
                <option value="Produit de beauté">Produit de beauté</option>
                <option value="Produit Entretien">Produit Entretien</option>
                <option value="Maison & Jardin">Maison & Jardin</option>
                <option value="Arts">Arts</option>
                
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="price">Prix:</label>
              <input
                type="number"
                id="price"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
     

            <div className="form-group">
              <label htmlFor="images">Images:</label>
              {imagesArray.map((image, index) => (
                <div key={index} className="image-input">
                  <img src={`/${image}`} alt={`Image ${index + 1}`} />
                  <button
                    type="button"
                    className=""
                    onClick={() => removeImage(index)}
                  >
                    <FaTimes />
                  </button>
                </div>
              ))}
              <input
                type="file"
                accept="image/*"
                onChange={uploadFileHandler}
              />
              {loadingUpload && product && <p>Loading...</p>}
            </div>

            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              Mettre à jour
            </button>
          </form>
        </>
      )}
    </section>
  )
}

export default ProductEditScreen
