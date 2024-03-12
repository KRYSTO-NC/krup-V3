import React, { useState } from 'react';
import { useGetProductsQuery } from '../../../slices/productApiSlice';
import ProductCard from '../../../components/productCard/ProductCard';

const ProductsScreen = () => {
  const { data: products, loading, error } = useGetProductsQuery();
  const [selectedCategory, setSelectedCategory] = useState('Toutes les catégories'); // État local pour la catégorie sélectionnée

  // Filtrer les produits en fonction de la catégorie sélectionnée et exclure ceux avec le titre "Sample name"
  const filteredProducts = products?.data?.filter(product => {
    if (selectedCategory === 'Toutes les catégories') {
      return product.name !== 'Sample name'; // Exclure les produits avec le titre "Sample name"
    } else {
      return product.category === selectedCategory && product.name !== 'Sample name';
    }
  });

  // Options de catégorie
  const categories = [
    'Toutes les catégories',
    'Alimentaires',
    'Fruits & Légumes',
    'Mode',
    'Produit de beauté',
    'Produit Entretien',
    'Maison & Jardin',
    'Arts'
  ];

  return (
    <section className='container'>
      <h1 className='large text-primary'>Les produits de nos artisans</h1>
      <p className='lead'>
        Découvrez les produits de nos artisans et producteurs locaux. et contactez-les d'un seul clic pour promouvoir leur travail.
      </p>

      {/* Dropdown pour sélectionner la catégorie */}
      <div className="filter-dropdown form">
        <div className="form-group">

        <label htmlFor="category">Filtrer par catégorie : </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
          </div>
      </div>

      <div className="products-container">
        {loading && <p>Chargement...</p>}
        {error && <p>Une erreur est survenue</p>}
        {filteredProducts && filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <p  className=' text-danger lead'>Aucun produit trouvé pour cette catégorie.</p>
         
        )}
      </div>
    </section>
  );
}

export default ProductsScreen;
