import React from 'react'
import { Link } from 'react-router-dom'
import './homeScreen.css'
import IconsSection from '../../components/iconsSection/IconsSection'
import {
  FaStore,
  FaUser,
  FaShoppingBasket,
  FaPaintBrush,
  FaConnectdevelop,
  FaLocationArrow,
  FaMoneyBillWave,
} from 'react-icons/fa'

import logo from '../../assets/logo/logo.png'
const HomeScreen = () => {
  return (
    <>
      <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <img className="landing-logo" src={logo} alt="" />

            <p className="lead  m-4">
              Bienvenue sur KRUP, la plateforme qui connecte les passionnés de
              produits locaux en Nouvelle-Calédonie. Découvrez un monde de
              saveurs, d'artisanat et de rencontres uniques.
            </p>

            <div className="buttons">
              <Link to="/register" className="btn btn-primary">
                Rejoignez KRUP maintenant
              </Link>
              <Link to="/login" className="btn">
                Connexion
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="welcome">
          <div className="container">
            <h2 className="x-large text-primary">Pourquoi KRUP?</h2>

            <p className="lead text-secondary">
              KRUP est bien plus qu'un simple réseau social. C'est une
              communauté dynamique qui célèbre les produits artisanaux et les
              talents locaux. Voici pourquoi vous allez adorer :
            </p>

            <ul className="about-home">
              <li>
                <FaPaintBrush />
                <h3>Connectez-vous avec Votre Communauté</h3>
                <p>
                  Découvrez des artisans, producteurs et revendeurs passionnés
                  près de chez vous.
                </p>
              </li>
              <li>
                <FaStore />
                <h3>Trouvez des Produits Uniques</h3>
                <p>
                  Explorez une variété de produits locaux, des bijoux aux
                  spécialités culinaires.
                </p>
              </li>
              <li>
                <FaMoneyBillWave />
                <h3>Soutenez l'Économie Locale</h3>
                <p>
                  Chaque achat sur KRUP contribue directement à soutenir les
                  artisans et producteurs de Nouvelle-Calédonie.
                </p>
              </li>
            </ul>

            <button className="btn btn-secondary action">
              Rejoignez-nous pour une expérience locale unique
            </button>
          </div>
        </div>

        <div className="container">
          <h2 className="large text-primary">Comment Ça Marche?</h2>
          <h3>Comment KRUP Vous Simplifie la Vie</h3>
          <p className="lead">
            Avec KRUP, tout est plus simple. Que vous soyez un passionné de
            produits locaux, un artisan à la recherche de visibilité ou un
            revendeur désirant élargir votre offre, voici comment nous vous
            aidons :
          </p>

          <ul className="about-home">
            <li>
              <FaUser />
              <h3>Pour les Utilisateurs</h3>
              Explorez les produits locaux, trouvez des événements à venir et
              connectez-vous avec les artisans de votre région.
            </li>
            <li>
              <FaStore />
              <h3>Pour les Organisateurs de foires / Salons et marchées</h3>

              <p>
                Organisez des salons, marchés et événements pour mettre en avant
                vos créations uniques.
              </p>
            </li>
            <li>
              <FaPaintBrush />
              <h3>Pour les Producteurs Artisants et artistes</h3>
              <p>
                Exposez vos produits et trouvez de nouveaux clients intéressés
                par l'authenticité de votre artisanat.
              </p>
            </li>
            <li>
              <FaShoppingBasket />
              <h3>Pour les Revendeurs</h3>
              <p>
                Consultez les catalogues des artisans locaux et ajoutez de
                nouvelles trouvailles à votre offre.
              </p>
            </li>
          </ul>

          <Link to={'/fonctionnalites'} className="btn btn-primary">
            Découvrez nos fonctionnalités
          </Link>
        </div>
        <div className="container">
          <h2 className="large text-primary">
            Rejoignez la Communauté KRUP Aujourd'hui !
          </h2>
          <p className="lead">
            Prêt à plonger dans l'univers de KRUP? Rejoignez des personnes qui
            célèbrent les produits locaux et l'artisanat calédonien.
          </p>

          <Link to={'/register'} className="btn btn-primary">
            Inscrivez-vous dès maintenant
          </Link>
        </div>

        <div className="krup-signification container">
          <h2 className="large text-primary">Que signifie KRUP?</h2>
          <div className="sign">

          <div className="letter">
            <h3 className="x-large text-primary">K</h3>
            <h4 className="large text-secondary">KRYSTO</h4>
          </div>
          <p className="lead">
            {' '}
            Les deux premières lettres "K" et "R" viennent de "Krysto", votre
            entreprise.{' '}
          </p>
          </div>
          <div className="sign">


          <div className="letter">
            <h3 className="x-large text-primary">R</h3>
            <h4 className="large text-secondary">RESEAUX</h4>
          </div>
          <p className="lead">
            {' '}
            Le "R" peut représenter "Réseau", car KRUP est un réseau social. Ce
            "Réseau" symbolise la connexion entre les différents acteurs locaux
            : les utilisateurs, les artisans, les producteurs et les revendeurs.{' '}
          </p>
          </div>
<div className="sign">

          <div className="letter">
            <h3 className="x-large">U</h3>
            <h4 className="large text-secondary">UNION</h4>
          </div>
          <p className="lead">
            {' '}
            Le "U" peut représenter "Unir". KRUP vise à unir la communauté
            autour des produits locaux de Nouvelle-Calédonie. Il s'agit de créer
            une plateforme où les utilisateurs peuvent se connecter, les
            artisans peuvent présenter leurs créations, les producteurs peuvent
            exposer leurs produits, et les revendeurs peuvent mettre en valeur
            les produits artisanaux calédoniens.
          </p>
</div>
<div className="sign">

          <div className="letter">
            <h3 className="x-large">P</h3>
            <h4 className="large text-secondary">PROMOUVOIR</h4>
          </div>
          <p className="lead">
            {' '}
            Le "P" peut représenter "Promotion". KRUP a pour objectif de
            promouvoir les produits locaux et de soutenir l'économie locale en
            mettant en avant les créations artisanales et les produits des
            producteurs calédoniens.
          </p>
</div>
        </div>

        <h2 className="large text-primary">Ce que nos utilisateurs disent</h2>

        <div className="testimonials">
          <div className="testimonial">
            <i>
              "KRUP m'a permis de découvrir des artisans locaux incroyables. Je
              n'aurais jamais trouvé ces trésors sans cette plateforme!" -
              <span> Marie </span>
            </i>
          </div>
          <div className="testimonial">
            <i>
              "En tant qu'artisan, KRUP m'a donné une visibilité que je n'aurais
              jamais eue autrement. Merci pour cette opportunité!" -
              <span>Jean</span>
            </i>
          </div>
          <div className="testimonial">
            <i>
              "Je suis un revendeur et KRUP a diversifié mon offre de produits.
              Mes clients adorent les nouveautés que je trouve ici!" -{' '}
              <span>Pierre </span>
            </i>
          </div>
        </div>
        <Link to={'/register'} className="btn btn-primary">
          Rejoignez-nous pour une expérience locale unique
        </Link>
      </section>
    </>
  )
}

export default HomeScreen
