import React from 'react';

import { ICompany, ISpecialty } from '../../model/Interfaces';

import './CompanyTable.css';
import { DataGrid, GridColDef, GridValueGetterParams, GridRenderCellParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
    {
        field: 'logo',
        headerName: 'Logo',
        width: 60,
        renderCell: (params: GridRenderCellParams<string>) => (<img height={40} width={40} src={params.value} alt="Company Logo" />)
    },
    { field: 'name', headerName: 'Company Name', width: 150 },
    { field: 'city', headerName: 'City', width: 90 },
    {
        field: 'specialties',
        headerName: 'Specialties',
        width: 900,
        valueGetter: (params: GridValueGetterParams) => (params.row.specialties?.map((specialty: ISpecialty) => (specialty.name)).join(', '))
    }
];

interface IProps {
    companies: ICompany[],
    specialties: ISpecialty[]
}

const CompanyTable: React.FC<IProps> = ({ companies, specialties }) => {
    return (
        <div className="table-wrapper">
            <DataGrid
                rows={companies}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                disableSelectionOnClick
                disableColumnFilter
            />
        </div>
    );
}

export default CompanyTable;