

# chatbot-backend

## Project setup

mkdir chatbot-server
cd chatbot-server
npm init -y

## dependencies
npm install express axios dotenv cors

# .env
.env: Environment variables configuration file.

# It is worth noting that replicate disables API Token that are uploaded on GitHub, thus a new token will have to be generated for this bot to run successfully

REPLICATE_API_TOKEN=your_replicate_api_token

# compile the server side
node index.mjs

index.mjs : Main server file.



# chatbot-frontend

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
