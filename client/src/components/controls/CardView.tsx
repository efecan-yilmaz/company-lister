import React from 'react';

import './CardView.css';
import Grid from '@mui/material/Grid';
import { ICompany } from '../../model/Interfaces';
import CompanyCard from './CompanyCard';

interface IProps {
    companies: ICompany[]
}

const CardView: React.FC<IProps> = ({ companies }) => {
    return (
        <div className="cardview-wrapper">
            <Grid container spacing={2}>
                {companies.map((company: ICompany) => <CompanyCard company={company} key={company.id} />)}
            </Grid>
        </div>
    )
}

export default CardView;