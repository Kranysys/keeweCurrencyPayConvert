# Application de Paiement et Conversion de Devise

Ce projet utilise **[TypeScript](https://www.typescriptlang.org/)** (^4.7.4), et utilise les frameworks suivants:

- [NestJS](https://nestjs.com/) (^9.0.11) pour le serveur (API REST)

- [React + ReactDOM](https://reactjs.org/) (^18.2.0) pour le client

- [Vite](https://vitejs.dev/) (^3.0.9): Basé sur ESBuild et Rollup, cet outil combine vitesse, performance et configurabilité pour offrir la meilleure expérience de développement frontend possible

### Instructions

1. Installer les dépendances

```sh
yarn install
```

2. Builder les packages (`lib` and `domain`) uitlisés par `server` et `client`:

```sh
yarn build:common
```

Pour le développement:

```sh
yarn start:common
```

## Linting

```sh
yarn lint
```

## Auteur

Nicolas BAPTISTA
