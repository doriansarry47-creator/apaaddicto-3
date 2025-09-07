# Apaaddicto 3 - Système d'Identification des Patients

Système de suivi et d'identification des patients permettant aux patients d'avoir un compte personnalisé avec leur suivi médical.

## Fonctionnalités

### Système d'Authentification
- **Inscription Patient**: Formulaire complet d'inscription avec toutes les informations nécessaires
- **Connexion Patient**: Système de connexion sécurisé avec email/mot de passe
- **Gestion de Session**: Sessions persistantes utilisant localStorage
- **Routes Protégées**: Accès au tableau de bord nécessitant une authentification

### Tableau de Bord Patient
- **Aperçu du Profil**: Affichage des informations personnelles du patient
- **Suivi Statistique**: Affichage des compteurs pour rendez-vous, médicaments, et historique médical
- **Navigation par Onglets**: Sections organisées pour différents aspects du suivi patient
- **Gestion du Profil**: Les patients peuvent consulter et modifier leurs informations personnelles

### Sections du Tableau de Bord
- **Aperçu**: Vue d'ensemble des informations patient et statistiques
- **Rendez-vous**: Gestion des rendez-vous médicaux (structure prête pour l'implémentation)
- **Médicaments**: Suivi des médicaments (structure prête pour l'implémentation)
- **Historique**: Historique médical (structure prête pour l'implémentation)
- **Profil**: Gestion des informations personnelles

## Installation et Utilisation

```bash
# Installer les dépendances
npm install

# Démarrer en mode développement
npm start

# Construire pour la production
npm run build
```

## Technologies Utilisées

- React 18 avec composants fonctionnels et hooks
- React Router v6 pour la navigation
- Context API pour la gestion d'état
- Design responsive avec thème dégradé
- Interface en français
- Validation de formulaires et gestion d'erreurs
- Persistance des données avec localStorage

## Structure du Projet

```
src/
├── App.js                 # Composant principal avec routage
├── AuthContext.js         # Contexte d'authentification
├── HomePage.js            # Page d'accueil
├── LoginPage.js           # Page de connexion
├── RegisterPage.js        # Page d'inscription
├── DashboardPage.js       # Tableau de bord principal
├── PatientProfile.js      # Gestion du profil patient
├── ProtectedRoute.js      # Composant de route protégée
├── theme.js               # Thème et styles
└── index.js               # Point d'entrée de l'application
```

## Déploiement

L'application est configurée pour être déployée sur Vercel avec le fichier `vercel.json` inclus.
