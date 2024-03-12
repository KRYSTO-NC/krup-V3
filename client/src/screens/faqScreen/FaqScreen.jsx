import React, { useState } from 'react';
import {
  FaChevronCircleDown,
  FaChevronDown,
  FaTimes,
} from 'react-icons/fa';
import './faqScreen.css';

const FaqScreen = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='container'>

        <h1 className='large text-primary'>FAQ</h1>
        <p className='lead'>Foire aux questions</p>


      <section className="faq-container">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq ${activeIndex === index ? 'active' : ''}`}
          >
            <h3 className="faq-title" onClick={() => toggleFaq(index)}>
              {faq.question}
            </h3>
            <p className="faq-text">{faq.answer}</p>
            <button className='faq-toggle' onClick={() => toggleFaq(index)}>
              {activeIndex === index ? <FaTimes className='times' /> : <FaChevronDown className='chevron' />}
            </button>
          </div>
        ))}
      </section>
    </div>
  );
};

const faqs = [
  {
    question: "A quoi sert Articonnect ?",
    answer: "Articonnect est une plateforme dédiée aux artistes, artisans et organisateurs d'événements en Nouvelle-Calédonie. Nous facilitons la connexion entre les artistes et la communauté locale, offrant un espace pour partager, découvrir et participer à des événements culturels uniques.",
  },
  {
    question: "Comment créer un compte ?",
    answer: "Pour créer un compte sur Articonnect, rendez-vous sur la page d'inscription, remplissez le formulaire et suivez les étapes simples pour rejoindre notre communauté artistique en ligne.",
  },
  {
    question: "Pourquoi Articonnect ?",
    answer: "Articonnect a pour mission de promouvoir la richesse artistique de la Nouvelle-Calédonie. En vous inscrivant sur Articonnect, vous rejoignez une communauté passionnée, vous avez l'opportunité de présenter vos créations et de participer à des événements culturels inspirants.",
  },
  {
    question: "Comment contacter le service client Articonnect ?",
    answer: "Pour contacter notre service client, veuillez nous envoyer un e-mail à l'adresse suivante : support@articonnect.nc ou nous appeler au 71.99.27.",
  },
  {
    question: "En tant qu'artisan, que gagne-je à m'inscrire sur Articonnect ?",
    answer: "En tant qu'artisan, votre inscription sur Articonnect vous donne une visibilité exceptionnelle auprès de la communauté locale. Vous pouvez présenter vos œuvres, interagir avec d'autres artistes et participants, et participer à des événements qui mettent en valeur votre talent unique.",
  },
  {
    question: "En tant qu'organisateur de marché ou de salon, pourquoi m'inscrire sur Articonnect ?",
    answer: "Articonnect offre aux organisateurs d'événements un moyen efficace de promouvoir leurs marchés ou salons, d'atteindre un public ciblé d'artistes et d'artisans, et de créer une communauté dynamique autour de vos initiatives culturelles.",
  },
  {
    question: "Comment modifier mon mot de passe ?",
    answer: "Pour modifier votre mot de passe, rendez-vous sur la page de connexion, puis cliquez sur le lien 'Mot de passe oublié' pour suivre les instructions de réinitialisation.",
  },
  {
    question: "Comment supprimer mon compte ?",
    answer: "Si vous souhaitez supprimer votre compte, veuillez nous envoyer un e-mail à l'adresse suivante : support@articonnect.nc, et notre équipe vous assistera dans le processus de suppression.",
  },
  {
    question: "J'ai oublié mon mot de passe, comment faire ?",
    answer: "Si vous avez oublié votre mot de passe, rendez-vous sur la page de connexion et cliquez sur 'Mot de passe oublié'. Suivez les instructions pour réinitialiser votre mot de passe.",
  },
];
export default FaqScreen;
