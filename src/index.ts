import express from 'express'
import * as process from "node:process";
import { graphqlHTTP } from 'express-graphql';
import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import resolver from './Infrastructure/GraphQL/Resolver';
import { makeExecutableSchema } from '@graphql-tools/schema';
import * as path from "node:path";
import sequelize from "./Config/Sequelize/Sequelize";

const app = express()

const PORT = process.env.PORT || 3000;

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const typeDefs = loadSchemaSync(path.resolve(process.cwd(), 'src/Infrastructure/GraphQL/schemas.types.graphql'), {
    loaders: [new GraphQLFileLoader()],
});

const schema = makeExecutableSchema({
    typeDefs,
    resolvers: resolver
});

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}))

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
        return sequelize.sync();
    })
    .then(() => {
        console.log('Database has been synced successfully.');
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`)
        })
    })
    .catch((err: any) => {
        console.error('Unable to connect to the database:', err);
    });

