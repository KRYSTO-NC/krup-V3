# Projet KRUP

KRUP est un réseau social dédié à la promotion des produits locaux en Nouvelle-Calédonie. Il permet aux utilisateurs de s'inscrire en différents rôles et offre une gamme de fonctionnalités pour faciliter la découverte et la vente de produits artisanaux. Ce README détaille les principales fonctionnalités et aspects techniques de KRUP.

## Fonctionnalités Principales

### Inscription et Profils
- Les utilisateurs peuvent s'inscrire en tant que :
  - Utilisateur (particuliers intéressés par les produits locaux)
  - Artisan Prestataire (organisateurs de salons et marchés)
  - Producteur (pour exposer leurs produits)
  - Revendeur (pour vendre les produits des artisans locaux)

### Pages d'Accueil Différenciées
- Chaque type d'utilisateur a une page d'accueil adaptée à ses besoins :
  - Les utilisateurs peuvent voir les produits locaux disponibles, les événements à venir, etc.
  - Les artisans prestataires ont des fonctionnalités pour organiser des événements (salons, marchés, etc.).
  - Les producteurs peuvent créer et gérer leurs profils de produits.
  - Les revendeurs peuvent consulter les catalogues des artisans et gérer leurs ventes.

### Recherche et Filtres
- Fonctionnalité de recherche avancée pour les produits, les événements, les artisans, etc.
- Filtres par catégorie de produits, localisation, prix, etc.

### Publication et Partage
- Tous les utilisateurs peuvent publier des informations sur les produits, les événements, les promotions, etc.
- Fonctionnalité de partage sur les réseaux sociaux pour étendre la portée des publications.

### Système de Commentaires et Avis
- Les utilisateurs peuvent laisser des commentaires et des avis sur les produits, les événements et les vendeurs.

### Messagerie Interne
- Système de messagerie intégré pour permettre aux utilisateurs de communiquer entre eux, notamment pour les demandes de renseignements sur les produits ou les ventes.

### Gestion des Événements
- Pour les artisans prestataires : gestion des dates, réservations pour les salons et marchés.
- Pour les utilisateurs : inscription et rappels pour les événements.

## Développement Technique

### Frontend (React)
- Conception de l'interface utilisateur conviviale et réactive.
- Intégration de cartes pour afficher les produits locaux, les événements, etc.
- Gestion des états avec des hooks (useState, useEffect, useContext).
- Connexion et authentification des utilisateurs.
- Interaction avec l'API Backend pour obtenir les données nécessaires.

### Backend (MongoDB)
- Modélisation des données pour les utilisateurs, les produits, les événements, etc.
- Création d'une API RESTful pour gérer les requêtes frontend.
- Intégration de MongoDB pour stocker les profils utilisateurs, les produits et les événements.
- Implémentation de la logique métier pour les différentes fonctionnalités (inscription, publication, recherche, etc.).

### Sécurité
- Authentification et autorisation des utilisateurs.
- Validation des données côté frontend et backend pour prévenir les attaques XSS et les injections SQL.
- Utilisation de JWT (JSON Web Tokens) pour les sessions utilisateur sécurisées.

## Signification de "KRUP"

- **K - Krysto**: Les deux premières lettres "K" et "R" viennent de "Krysto", votre entreprise.
- **R - Réseau**: Le "R" peut représenter "Réseau", car KRUP est un réseau social. Ce "Réseau" symbolise la connexion entre les différents acteurs locaux : les utilisateurs, les artisans, les producteurs et les revendeurs.
- **U - Unir**: Le "U" peut représenter "Unir". KRUP vise à unir la communauté autour des produits locaux de Nouvelle-Calédonie. Il s'agit de créer une plateforme où les utilisateurs peuvent se connecter, les artisans peuvent présenter leurs créations, les producteurs peuvent exposer leurs produits, et les revendeurs peuvent mettre en valeur les produits artisanaux calédoniens.
- **P - Promotion**: Le "P" peut représenter "Promotion". KRUP a pour objectif de promouvoir les produits locaux et de soutenir l'économie locale en mettant en avant les créations artisanales et les produits des producteurs calédoniens.

---
© 2024 KRUP. Ce projet est sous licence MIT. Pour plus d'informations, veuillez consulter le fichier LICENSE.
