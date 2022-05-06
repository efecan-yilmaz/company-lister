export interface ISpecialty {
    id: string;
    name: string;
}

export interface ICompany {
    id: string;
    name: string;
    logo: string;
    city: string;
    specialties?: ISpecialty[];
}

export interface ICompanyFlat {
    id: string;
    name: string;
    logo: string;
    city: string;
    specialties?: string;
}