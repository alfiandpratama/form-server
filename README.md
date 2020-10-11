# Mitrais Form Server - Dockerized
Back-end form for Mitrais Coding Test - using docker

1. Clone this repo
2. run `npm install`
3. Make sure you have docker installed and running on your computer
4. Run `docker-compose up` ( you may have to run `docker-compose up --build` for the first setup phase)
5. If you want to running server in local env, you need to update line 12 in app.js.

**Important:** if you are getting conflict erros, you should run `docker stop <container name>` that is already running in the background.
**Important:** if you are getting other erros, you should run `docker-compose down` to bring everything down, and start over.

To access backend's bash:
Run `docker-compose exec form-server bash`

To access postgres: (adjust PORT number if needed)
Run  `psql postgres://<username>:<password>@localhost:5432/mitrais-form`

** Make sure you use postgreSQL instead of mySQL for this code base.
