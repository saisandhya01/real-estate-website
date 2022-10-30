import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Properties from "../dummydata/properties.json";
import SinglePropertyCard from "./SinglePropertyCard";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function PropertyCards({ filters }) {
  const renderData = (filters) => {
    const filteredProperties = Properties.filter(
      (el) =>
        ((el.location !== filters.location && filters.location === "") ||
          el.location === filters.location) &&
        ((el.property !== filters.propertyType &&
          filters.propertyType === "") ||
          el.property === filters.propertyType) &&
        el.price >= filters.minPrice &&
        el.price <= filters.maxPrice &&
        el.squarefeet >= filters.minArea &&
        el.squarefeet <= filters.maxArea
    );

    if (filteredProperties.length === 0) {
      return (
        <div className="no-filters">
          <h1>No properties found for the above filters.</h1>
        </div>
      );
    }
    return filteredProperties.map((filteredProperty) => (
      <Grid item xs={2} sm={4} md={4} key={filteredProperty.id}>
        <SinglePropertyCard
          key={filteredProperty.id}
          details={filteredProperty}
        />
      </Grid>
    ));
  };
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {renderData(filters)}
          {/*Properties.filter(
            (el) =>
              ((el.location !== filters.location && filters.location === "") ||
                el.location === filters.location) &&
              ((el.property !== filters.propertyType &&
                filters.propertyType === "") ||
                el.property === filters.propertyType) &&
              el.price >= filters.minPrice &&
              el.price <= filters.maxPrice &&
              el.squarefeet >= filters.minArea &&
              el.squarefeet <= filters.maxArea
          ).map((filteredProperty) => (
            <Grid item xs={2} sm={4} md={4} key={filteredProperty.id}>
              <SinglePropertyCard
                key={filteredProperty.id}
                details={filteredProperty}
              />
            </Grid>
          ))*/}
        </Grid>
      </Box>
    </div>
  );
}

export default PropertyCards;
