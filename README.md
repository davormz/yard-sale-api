# yard-sale-api Project
Hi there!!  

yard-sale-api is intendet as a basic e-commerce API for study and practice porpuses.

## Project Setup.

### Pre requisites.
* Git - [Download and install git](https://git-scm.com/downloads)
* Node.js - [Download and install Node](https://nodejs.org/en/download/)
* Docker (Optional but very useful) - [Download and install Docker](https://docs.docker.com/)

### Dependencies 
Start by installing the project and download the dependencies:
```shell
$ npm install
```

### Parameter configuration
The project contains the _env_example_ file, this file contains the parameters required for the app to run.
Create the _.env_ file based on the _.env_example_ file and add the proper values.

### DB setup
This project requires a DB connection to work. The project includes a docker-compose file with the services ready to use PostgreSQL or MySQL.

Start the PostgreSQL service:
```shell
$ docker-compose up -d postgres
```

Or start MySQL service:
```shell
$ docker-compose up -d mysql
```

This project uses [Sequelize](https://sequelize.org/) for the domain model. Once the DB service is running install the DB by running: 
```shell
$ npm run migrations:run
```

### Running on local
Before starting the server configure the server port on the _.env_ file.
```
APP_PORT=3000
```
Then just execute the following command:
```shell
$ npm run dev
```
Your application should run on port 3000 with the development environment configuration, so in your browser just go to http://localhost:3000

That's it! The application should be running.

## Project Scripts



