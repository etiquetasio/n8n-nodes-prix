# n8n-nodes-etiquetasio

Custom PRIX ESL n8n Nodes Project

## How to run

It's necessary to have node and npm installed on your machine

1. Install n8n locally

```sh
npm install n8n
```

2. Start n8n

```sh
n8n start
```

3. Build the node

```sh
gh repo clone toledo/n8n-nodes-prix
npm install
npm run build
```

4. Publish the node locally

```sh
npm link
```

5. Install node on n8n

```sh
cd ~/.n8n/nodes # or the directory where your n8n is installed
npm link n8n-nodes-prix
```
