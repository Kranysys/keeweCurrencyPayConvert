# Application de Paiement et Conversion de Devise

![Screenshot of my app](doc/screenshot.png)

![Screenshot of my app](doc/screenshot2.png)

![Screenshot of my app](doc/screenshot3.png)

Ce projet utilise **[TypeScript](https://www.typescriptlang.org/)** (^4.7.4), et utilise les frameworks suivants:

- [NestJS](https://nestjs.com/) (^9.0.11) pour le serveur (API REST)

- [React + ReactDOM](https://reactjs.org/) (^18.2.0) pour le frontend

- [Vite](https://vitejs.dev/) (^3.0.9): Basé sur ESBuild et Rollup, cet outil combine vitesse, performance et configurabilité pour offrir la meilleure expérience de développement frontend possible

### Instructions

1. Installer les dépendances

```sh
yarn install
```

2. Builder les packages (`lib` and `domain`) utilisés par `backend` et `frontend`:

```sh
yarn build:common
```

Pour le développement:

```sh
yarn start:common
```

Ou lancer dans les dossiers respectifs le frontend et le backend avec `yarn start`

## Linting

```sh
yarn lint
```

## Database

The backend NestJS use Mysql as database to store the history of payments.

![Screenshot of my app](doc/database.png)

## Auteur

Nicolas BAPTISTA
