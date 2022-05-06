import express, { Express } from 'express';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import RootSchema from './model/Schema';

const app: Express = express();
const port: number = 8080;

// initialize cors, allow 3000 port
app.use(cors({
    origin: 'http://localhost:3000'
}));

// initialize graphql endpoint
app.use('/graphql', graphqlHTTP({
    schema: RootSchema,
    graphiql: true
}));

app.listen(port);