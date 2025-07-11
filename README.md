
# Rick and Morty Characters API

This is a simple API created to get information of Characters from Rick and Morty universe. This implements Express, GraphQL and Sequelize ORM connected to PostgreSQL database.




## Environment Variables

IMPORTANT!!!

To run this project, you will need to add the following environment variables to your .env file

the next values is for local set up

```
PORT=3000
HOST="127.0.0.1"
SEQUELIZE_DB_USERNAME="postgres"
SEQUELIZE_DB_PASSWORD="admin"
SEQUELIZE_DB_NAME="rickandmortyapitest"
SEQUELIZE_DB_HOST="localhost"
SEQUELIZE_DB_DIALECT="postgres"
PLATFORM_GRAPHQL_URL="http://127.0.0.1:3000/graphql"
```



## Run Locally

Clone the project

```bash
  git clone https://github.com/estebanbar19/RickAndMortyApiTest
```

Go to the project directory

```bash
  cd RickAndMortyApiTest
```

Set `.env` file as shown in previous step

Install dependencies (Using force flag to avoid errors)

```bash
  npm install --force
```

Start the API

```bash
  npm run start
```


## How it works

Using `npm start`, the Typescript code is built, then the database is created through a script in the path `src/Config/Sequelize/Database/CreateDatabase.ts`, then the migrations are executed to create the table and fill it with the first 15 records. With this, the server is started on the host and port defined in the environment variables.
## Usage/Examples

To use the API. You have to access to the route `/characters` and you will get all the characters from DB in a JSON

To use filters you have to pass it as query param. For example `/characters?status=Alive&gender=Male`, it will fetch all the characters that are Male and the status is Alive from DB as JSON in same way

This transform the query and the filters to a GraphQL query. In case you want to access to the GraphQL playground, you can enter through the `PLATFORM_GRAPHQL_URL` setted in `.env` file. NOTE THAT THE HOST AND PORT MUST BE THE SAME AS YOU DEFINE IN `HOST` AND `PORT` ENVIROMENT VARIABLES.







## Feedback

If you have any feedback, please reach out to me at estebanbar1912@gmail.com.

It was a pleasure developing this technical test. Due to personal health issues, I couldn't submit it yesterday. I hope it meets your expectations. Thank you very much.

