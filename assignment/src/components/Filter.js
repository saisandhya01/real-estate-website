import React from 'react';
import PropertyCards from './PropertyCards';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

const locations = [
    {
      value: 'Bangalore',
      label: 'Bangalore',
    },
    {
      value: 'Mumbai',
      label: 'Mumbai',
    },
    {
      value: 'Hyderabad',
      label: 'Hyderabad',
    },
    {
      value: 'Delhi',
      label: 'Delhi',
    },
];

const propertyTypes = [
    {
      value: 'Houses',
      label: 'Houses',
    },
    {
      value: 'Land',
      label: 'Land',
    },
    {
      value: 'Apartments',
      label: 'Apartments',
    },
];
  
const prices = [
    {
      value: '80k - 100k',
      label: '80k - 100k',
    },
    {
      value: '101k - 300k',
      label: '101k - 300k',
    },
    {
      value: '301k - 500k',
      label: '301k - 500k',
    },
    {
      value: '501k - 1M',
      label: '501k - 1M',
    },
];
const squarefeetdata = [
    {
      value: '< 2 m3',
      label: '< 2 m3',
    },
    {
        value: '2 - 5 m3',
        label: '2 - 5 m3'
    },
    {
        value: '> 5 m3',
        label: '> 5 m3'
    }
  ];

const Filter = () => {
    const [location, setLocation] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [squarefeet, setSquarefeet] = React.useState('');
    const [propertyType, setPropertyType] = React.useState('');
    const [submittedData, setSubmittedData] = React.useState({});

  const handleChangeLocation = (event) => {
    setLocation(event.target.value);
  };
  const handleChangePrice = (event) => {
    setPrice(event.target.value);
    };
    const handleChangePropertyType = (event) => {
      setPropertyType(event.target.value);
    }
    const handleChangeSquareFeet = (event) => {
        setSquarefeet(event.target.value);
    }

    const handleSubmit = () => {
        setSubmittedData({ location, price, squarefeet, propertyType });
    }

    return (
        <div>
            <TextField
          id="outlined-select-location"
          select
          label="Location"
          value={location}
          onChange={handleChangeLocation}
          helperText="Please select your location"
        >
          {locations.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
            </TextField>

            <TextField
          id="outlined-select-price"
          select
          label="Price"
          value={price}
          onChange={handleChangePrice}
          helperText="Please select your price"
        >
          {prices.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
            </TextField>

            
            <TextField
          id="outlined-select-property-type"
          select
          label="Property type"
          value={propertyType}
          onChange={handleChangePropertyType}
          helperText="Please select Property type"
        >
          {propertyTypes.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
            </TextField>

            <TextField
          id="outlined-select-square feet"
          select
          label="Square Feet"
          value={squarefeet}
          onChange={handleChangeSquareFeet}
          helperText="Please select area range"
        >
          {squarefeetdata.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
            </TextField>
           
            <Button variant="contained" onClick = {handleSubmit}>Submit</Button>
            <PropertyCards filters={submittedData}/>
        </div>
    );
};

export default Filter;