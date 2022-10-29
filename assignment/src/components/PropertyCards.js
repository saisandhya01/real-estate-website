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
  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}
    return (
      <div>{
        !isEmpty(props.filters) &&
        <div>
        Applied filters are:
            <div>Location: {props.filters.location}</div>
            <div>Price: {props.filters.price}</div>
            <div>PropertyType: {props.filters.propertyType}</div>
          <div>Square feet : {props.filters.squarefeet}</div>
          { 
            Properties.filter(el => ((el.location !== props.filters.location && props.filters.location === "") || el.location === props.filters.location)
            && ( (el.property !== props.filters.propertyType && props.filters.propertyType === "")  || el.property === props.filters.propertyType)).map(filteredProperty => (
              <li>
                {filteredProperty.location}
              </li>
            ))
          }
        </div>
      }
            <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(15)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
           <SinglePropertyCard /> 
          </Grid>
        ))}
      </Grid>
    </Box>
        </div>
    );
}

export default PropertyCards;