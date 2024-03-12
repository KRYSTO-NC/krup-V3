import './iconsSection.css'
import { FaCommentDollar, FaConnectdevelop, FaCubes, FaGreaterThan, FaHeart, FaLeaf, FaMoneyBill, FaPlaneDeparture, FaTruck } from 'react-icons/fa'

const IconsSection = () => {
  return (
    <section className="icons-section">
      <div className="flex-items">
        <div className="icon-container">
          <FaConnectdevelop />
          <h3 className='medium text-primary'>Diversité</h3>
          <p className='medium'>Explorez et rester connectée avec les artisans et producteur locaux </p>
        </div>
        </div>
<div className="flex-items">

        <div className="icon-container">
          <FaLeaf />
          <h3 className='medium text-primary'>Eco-Logique</h3>
          <p className='medium'>Obtenez des devis adaptés à vos besoins spécifiques.</p>
        </div>
</div>
<div className="flex-items">
        <div className="icon-container">
          <FaMoneyBill/>
          <h3 className='medium text-primary'>Bon pour l'économie</h3>
          <p className='medium'>Recevez vos commandes rapidement et efficacement.</p>
        </div>
      </div>
    </section>
  )
}

export default IconsSection
