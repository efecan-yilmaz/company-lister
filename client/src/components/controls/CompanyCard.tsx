import React from 'react';

import { ICompany, ISpecialty } from '../../model/Interfaces';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


interface IProps {
    company: ICompany
}

const CompanyCard: React.FC<IProps> = ({ company }) => {
    return (
        <Grid item xs={4}>
            <Card sx={{ maxWidth: 400 }}>
                <CardHeader title={company.name} subheader={company.city} />
                <CardMedia component="img" height="194" image={company.logo} alt="Company Logo" />
            </Card>
            <CardContent>
                <Typography variant="h6" color="text.secondary">
                    Specialties:
                </Typography>
                <Stack direction="column" spacing={1}>
                    {company.specialties?.map((specialty: ISpecialty) => <Chip label={specialty.name} color="success" variant="outlined" key={specialty.id} />)}
                </Stack>
            </CardContent>
        </Grid>
    )
}

export default CompanyCard;