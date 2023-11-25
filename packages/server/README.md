# Serveur Nest

### Initialisation

Ce module s'adapte aussi bien aux fichiers locaux `dotenv` qu'aux volumes de configuration de l'orchestration de conteneurs — par exemple, [Kubernetes `config-volume`](https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-configmap/). Il suit la logique ci-dessous pour définir les variables de configuration, par ordre de priorité :

1. Si les variables d'environnement `CONFIG_PATH` et `SECRETS_PATH` sont définies, il cherchera leurs valeurs correspondantes comme dossiers et hydratera la configuration avec le contenu de leurs fichiers.

2. Si la variable d'environnement `NODE_ENV` est définie, il lira à la fois les variables de configuration habituelles et les secrets depuis le fichier correspondant `env/${NODE_ENV}.env`. Tous les secrets doivent être préfixés par la chaîne `SECRET_` conformément au `configSchema`.

3. Si aucune des options ci-dessus n'est fournie, il essaiera de lire les variables de configuration et de secret depuis le fichier `env/local.env`.

4. Si aucune des options ci-dessus n'est satisfaite, l'application lancera une erreur non interceptée et s'arrêtera.

## Exécution de l'application

Par défaut, le serveur écoute sur le port [http://localhost:4000](http://localhost:4000). Ce comportement peut être configuré via le fichier [local.env](./env/local.env).

### En développement

Pour exécuter le serveur de développement localement, vous pouvez utiliser les commandes ci-dessous :

```sh
# Exécute la version actuelle du serveur
yarn start

# Exécute la version actuelle du serveur
# + surveille les changements de fichiers
yarn start:dev

# Exécute la version actuelle du serveur
# + surveille les changements de fichiers
# + ouvre une connexion de débogage (port par défaut 9229)
yarn start:debug
```
