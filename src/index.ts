import 'module-alias/register';
import dotenv from 'dotenv';
import express, { Application } from 'express';
import { graphqlHTTP } from 'express-graphql';
import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { makeExecutableSchema } from '@graphql-tools/schema';
import * as path from "node:path";
import { db as sequelize } from "@config/Sequelize/Sequelize";
import resolver from './Infrastructure/GraphQL/Resolver';
import CharactersRouter from "@core/Routes/CharactersRouter";

dotenv.config();

class App {
    private readonly app: Application;
    private readonly port: number;

    constructor() {
        this.app = express();
        this.port = Number(process.env.PORT) || 3000;
        this.initializeMiddlewares();
        this.initializeRoutes();
        this.initializeGraphQL();
    }

    private initializeMiddlewares(): void {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));

        this.app.get('/health', (_, res) => {
            res.status(200).json({ status: 'OK', timestamp: new Date() });
        });
    }

    private initializeRoutes(): void {
        this.app.get('/', (_, res) => {
            res.send('Rick and Morty API');
        })
        this.app.use('/characters', CharactersRouter);
    }

    private initializeGraphQL(): void {
        try {
            const typeDefs = loadSchemaSync(
                path.resolve(process.cwd(), 'src/Infrastructure/GraphQL/schemas.types.graphql'),
                { loaders: [new GraphQLFileLoader()] }
            );

            const schema = makeExecutableSchema({
                typeDefs,
                resolvers: resolver
            });

            this.app.use('/graphql', graphqlHTTP({
                schema,
                graphiql: true,
            }));
        } catch (error) {
            console.error('Error initializing GraphQL: ', error);
            process.exit(-1);
        }
    }

    private async initializeDatabase(): Promise<void> {
        try {
            await sequelize.authenticate();
            console.log('Database connection established successfully.');
            
            await sequelize.sync();
            console.log('Database synchronized successfully.');
        } catch (error) {
            console.error('Unable to connect to the database: ', error);
            throw error;
        }
    }

    public async start(): Promise<void> {
        try {
            await this.initializeDatabase();
            
            this.app.listen(this.port, () => {
                console.log(`Server is running on http://localhost:${this.port}`);
                console.log(`GraphQL Playground available at http://localhost:${this.port}/graphql`);
            });

        } catch (error) {
            console.error('Error starting the server: ', error);
            process.exit(-1);
        }
    }
}

const app = new App();

app.start().catch((error) => {
    console.error('Error starting application: ', error);
    process.exit(-1);
});