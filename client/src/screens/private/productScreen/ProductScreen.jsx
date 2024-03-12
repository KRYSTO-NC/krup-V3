import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetProductQuery } from '../../../slices/productApiSlice';
import { useDispatch, useSelector } from 'react-redux';
import { FaHeart } from 'react-icons/fa';
import Slider from '../../../components/shared/slider/Slider';



const ProductScreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data: product, isLoading, error } = useGetProductQuery(id);
    console.log(product);


  const { userInfo } = useSelector((state) => state.auth);

  return (
    <>
      {isLoading ? (
        <div>Chargement...</div>
      ) : error ? (
        <div>Error: {error?.data?.message}</div>
      ) : (
        <div className="container">
          <Slider product={product.data} />
          <div className="price">
            <h2>{product.data.price.toLocaleString('fr-FR')} XPF</h2>
          </div>
          <div className="product-details">
            <h1>{product.data.name}</h1>
           
            <div className="product-actions">
               <button className='btn btn-primary'>
                contacter le vendeur
               </button>
               <button className='btn btn-primary'>
               Voir la boutique de ce vendeur
               </button>
            </div>
            <div className="description">
              <h2>Détails sur ce produit</h2>
              <p>{product.data.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductScreen;
