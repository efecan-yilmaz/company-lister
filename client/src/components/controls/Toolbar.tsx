import React from 'react';

import { ISpecialty } from '../../model/Interfaces';

import './Toolbar.css'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import Autocomplete from '@mui/material/Autocomplete';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

interface IProps {
    clearSearchBar: () => void;
    onSearchBarChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    searchBarValue?: string;
    specialties: readonly ISpecialty[];
    specialtyFilterValue: ISpecialty[];
    onSpecailtyFilterChange: (event: React.SyntheticEvent<Element, Event>, value: ISpecialty[]) => void;
    onClearFilterClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onCardSwitchChange: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
}

const Toolbar: React.FC<IProps> = ({ searchBarValue, onSearchBarChange, clearSearchBar,  specialties, onSpecailtyFilterChange, specialtyFilterValue, onClearFilterClick, onCardSwitchChange}) => {
    return (
        <div className="toolbar-wrapper">
            <Box sx={{ textAlign: 'left', display: 'inline-flex', flexWrap: 'wrap' }}>
                <TextField
                    variant="standard"
                    placeholder="Search by name..."
                    value={searchBarValue}
                    onChange={onSearchBarChange}
                    InputProps={{
                        startAdornment: <SearchIcon fontSize="small" />,
                        endAdornment: (
                            <IconButton title="Clear" aria-label="Clear" size="small"
                                style={{ visibility: searchBarValue ? 'visible' : 'hidden' }}
                                onClick={clearSearchBar}>
                                <ClearIcon fontSize="small" />
                            </IconButton>
                        ),
                    }}
                    sx={{
                        width: { xs: '300px', sm: 'auto', },
                        m: (theme) => theme.spacing(1, 0.5, 1.5),
                        '& .MuiSvgIcon-root': { mr: 0.5, },
                        '& .MuiInput-underline:before': {
                            borderBottom: 1,
                            borderColor: 'divider',
                        },
                    }}
                />
                <Autocomplete
                    multiple
                    size="small"
                    limitTags={2}
                    options={specialties}
                    value={specialtyFilterValue}
                    onChange={onSpecailtyFilterChange}
                    getOptionLabel={(specialty: ISpecialty) => specialty.name}
                    renderInput={(params) => (
                        <TextField {...params} label="Specialties" placeholder="Specialties" />
                    )}
                    sx={{ width: {xs: '300px', sm: '800px'}, display: 'inline-block', marginLeft: '10px'}}
                />
                <IconButton color="warning" aria-label="Clear Filter" sx={{marginLeft: '10px'}} onClick={onClearFilterClick}>
                    <FilterAltOffIcon />
              </IconButton>
              <FormControlLabel control={<Switch onChange={onCardSwitchChange}/>} label="Show as cards" sx={{marginLeft: '10px', top: '25px'}}  />
            </Box>
        </div>
    )
}

export default Toolbar;