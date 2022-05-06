import { gql, DocumentNode } from "@apollo/client";

export const GetCompanies: DocumentNode = gql`
query($specialties: [String], $name: String) {
	companies {
        getCompanies(specialties: $specialties, name: $name) {
            id
            name
            city
            logo
            specialties {
                id
                name
            }
        }
    }
}`;

export const GetAllSpecialties: DocumentNode = gql`
query {
	specialties {
        getAllSpecialties {
            id
            name
        }
    }
}`;