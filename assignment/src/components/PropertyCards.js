import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Properties from '../dummydata/properties.json';
import SinglePropertyCard from './SinglePropertyCard';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function PropertyCards(props) {
    return (
        <div>
        Applied filters are:
            <div>Location: {props.filters.location}</div>
          <div>Min Price: {props.filters.minPrice}</div>
          <div>Max Price: {props.filters.maxPrice}</div>
            <div>PropertyType: {props.filters.propertyType}</div>
          <div>Min area : {props.filters.minArea}</div>
          <div>Max area : {props.filters.maxArea}</div>
          <Box sx={{ flexGrow: 1 }}>
           <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {
            Properties.filter(el => ((el.location !== props.filters.location && props.filters.location === "") || el.location === props.filters.location)
              && ((el.property !== props.filters.propertyType && props.filters.propertyType === "") || el.property === props.filters.propertyType)
              && (el.price >= props.filters.minPrice && el.price <= props.filters.maxPrice)
              && (el.squarefeet >= props.filters.minArea && el.squarefeet <= props.filters.maxArea)
            ).map(filteredProperty => (
              <Grid item xs={2} sm={4} md={4} key={filteredProperty.id}>
                <SinglePropertyCard key={filteredProperty.id} details={filteredProperty} />
             </Grid>
                ))}
          </Grid>
          </Box>
        </div>
    );
}

export default PropertyCards;