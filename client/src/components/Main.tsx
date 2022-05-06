import React, { useEffect, useState } from 'react';
import { useQuery } from "@apollo/client";

import CompanyTable from './controls/CompanyTable';
import Toolbar from './controls/Toolbar';

import { GetAllSpecialties, GetCompanies } from '../model/Queries';
import { ICompany, ISpecialty } from '../model/Interfaces';
import CardView from './controls/CardView';

export interface IQueryGetCompanies {
    companies: {
        getCompanies: ICompany[]
    }
}

interface IQueryGetAllSpecialties {
    specialties: {
        getAllSpecialties: ISpecialty[]
    }
}

interface IFilter {
    searchBar: string;
    specialties: ISpecialty[];
}

const Main: React.FC = () => {
    const initialFilter = {searchBar: '', specialties: []};
    const [companies, setCompanies] = useState<ICompany[]>([]);
    const [specialties, setSpecialties] = useState<ISpecialty[]>([]);
    const [filter, setFilter] = useState<IFilter>(initialFilter);
    const [showCardView, setShowCardView] = useState<boolean>(false);

    const { data: companyData, refetch} = useQuery<IQueryGetCompanies>(GetCompanies);
    const { data: specialtyData } = useQuery<IQueryGetAllSpecialties>(GetAllSpecialties);

    useEffect(() => {
        if (companyData) setCompanies(companyData.companies.getCompanies);
    }, [companyData]);

    useEffect(() => {
        if (specialtyData) setSpecialties(specialtyData.specialties.getAllSpecialties);
    }, [specialtyData]);

    useEffect(() => {
        refetch({
            name: filter.searchBar,
            specialties: filter.specialties.map((specialty: ISpecialty) => specialty.id)
        });
    }, [filter]);

    return (
        <div>
            <Toolbar searchBarValue={filter.searchBar} 
                onSearchBarChange={(event: React.ChangeEvent<HTMLInputElement>) => setFilter((prevFilter: IFilter) => ({...prevFilter, searchBar: event.target.value}))}
                clearSearchBar={() => setFilter((prevFilter: IFilter) => ({...prevFilter, searchBar: ''}))}
                specialtyFilterValue={filter.specialties} 
                specialties={specialties}
                onSpecailtyFilterChange={(event: React.SyntheticEvent<Element, Event>, value: ISpecialty[]) => {setFilter((prevFilter: IFilter) => ({...prevFilter, specialties: value}))}}
                onClearFilterClick={() => {if (JSON.stringify(filter) !== JSON.stringify(initialFilter)) setFilter(initialFilter)}}
                onCardSwitchChange={(event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {setShowCardView(checked)}}/>
            {showCardView ? <CardView companies={companies} /> : <CompanyTable companies={companies} specialties={specialties} />}
        </div>
      );
}

export default Main;