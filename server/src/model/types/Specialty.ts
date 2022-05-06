import { GraphQLObjectType, GraphQLString, GraphQLList } from "graphql";

const specialtyData = require("../data/specialties.json");

const TSpecialty: GraphQLObjectType<any, any> = new GraphQLObjectType({
    name: 'Specialty',
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString}
    })
});

const SpecialtyQuery: GraphQLObjectType<any, any> = new GraphQLObjectType({
    name: 'SpecialtyQuery',
    fields: {
        getAllSpecialties: {
            type: new GraphQLList(TSpecialty),
            resolve: () => specialtyData
        }
    }
});

export default SpecialtyQuery;
export { TSpecialty };