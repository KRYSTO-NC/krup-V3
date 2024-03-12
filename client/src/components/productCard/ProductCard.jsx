import { Link, useNavigate } from 'react-router-dom'
import './productCard.css'
import { FaComment, FaEye, FaHeart, FaQuestion } from 'react-icons/fa'
import { useSelector } from 'react-redux'


const ProductCard = ({ product }) => {

 
  
console.log(product);


  const formattedPrice = product.price.toLocaleString('fr-FR')





  return (
    <div className="product-card">
      <div className="badge badge-primary">{product.category}</div>


      <div className="product-thumb">
        <Link to={`/produit/${product._id}`}>
          {product.images && product.images.length > 0 && (
            <img src={product.images[0]} alt={product.name} />
          )}
        </Link>
      </div>
      <div className="product-details">
       

        <h4>
          <Link to={`/produit/${product._id}`}>{product.name}</Link>
        </h4>
        <p className="card-p">{product.description}</p>
      </div>
      <div className="product-bottom-details">
        <div className="product-price">
          {formattedPrice}
          <small>XPF</small>
        </div>
        <div className="product-links">
          <Link to={`/produit/${product._id}`}>
            <FaEye />
          </Link>

          <Link to={`/produit/${product._id}`}>
            <FaComment/>
          </Link>

          <button >
            <FaHeart />
          </button>

         
        </div>
      </div>
    </div>
  )
}

export default ProductCard
