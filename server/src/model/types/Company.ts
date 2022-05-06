import { GraphQLObjectType, GraphQLString, GraphQLList } from "graphql";
import { TSpecialty } from "./Specialty";

const companyData = require("../data/companies.json");
const specialtyData = require("../data/specialties.json");
const cityData = require("../data/cities.json");

const TCompany: GraphQLObjectType<any, any> = new GraphQLObjectType({
    name: 'Company',
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        logo: {type: GraphQLString},
        city: {type: GraphQLString},
        specialties: {type: new GraphQLList(TSpecialty)}
    })
});

interface ISpecialty {
    id: string;
    name: string;
}

interface ICompanyFlat {
    id: string;
    name: string;
    logo: string;
    city: string;
    specialties: string[];
}

interface ICompany {
    id: string;
    name: string;
    logo: string;
    city: string;
    specialties: ISpecialty[];
}

interface ICity {
    id: string;
    name: string;
}

const CompanyQuery: GraphQLObjectType<any, any> = new GraphQLObjectType({
    name: 'CompanyQuery',
    fields: {
        getCompanies: {
            type: new GraphQLList(TCompany),
            args: {
                name: {type: GraphQLString},
                specialties: {type: new GraphQLList(GraphQLString)}
            },
            resolve: (root, {name, specialties}) => {
                return companyData.map((company: ICompanyFlat) => ({
                    ...company,                   
                    city: cityData.find((city: ICity) => company.city === city.id).name,  // find city name related to city id in data
                    specialties: company.specialties.map((specialty: string) => ({  // find specialty objects related to specialty id in data
                        id: specialty,
                        name: specialtyData.find((sd: ISpecialty) => specialty === sd.id).name
                    }))
                })).filter((company: ICompany) => name ? company.name.toLowerCase().includes(name.toLowerCase()) : true)  // filter by company name
                .filter((company: ICompany) => !specialties ? true : specialties.every((specialty: string) => company.specialties.find((sp: ISpecialty) => sp.id === specialty) ));  //filter by specialties
            }
        }
    }
});

export default CompanyQuery;