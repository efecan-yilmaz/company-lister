import { GraphQLSchema, GraphQLObjectType } from "graphql";
import CompanyQuery from "./types/Company";
import SpecialtyQuery from "./types/Specialty";

const rootQuery: GraphQLObjectType<any, any> = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        companies: {
            type: CompanyQuery,
            resolve: () => ({})
        },
        specialties: {
            type: SpecialtyQuery,
            resolve: () => ({})
        }
    }
});

const RootSchema: GraphQLSchema = new GraphQLSchema({
    query: rootQuery
});

export default RootSchema;