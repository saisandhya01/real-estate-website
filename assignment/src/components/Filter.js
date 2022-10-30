import React from "react";
import PropertyCards from "./PropertyCards";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import "../css/filterButton.css";

const locations = [
  {
    value: "Bangalore",
    label: "Bangalore",
  },
  {
    value: "Mumbai",
    label: "Mumbai",
  },
  {
    value: "Hyderabad",
    label: "Hyderabad",
  },
  {
    value: "Delhi",
    label: "Delhi",
  },
  {
    value: "",
    label: "*Reset*",
  },
];

const propertyTypes = [
  {
    value: "House",
    label: "House",
  },
  {
    value: "Land",
    label: "Land",
  },
  {
    value: "Apartment",
    label: "Apartment",
  },
  {
    value: "",
    label: "*Reset*",
  },
];

const prices = [
  {
    label: "$80k - $100k",
    value: "80-100",
  },
  {
    label: "$101k - $300k",
    value: "101-300",
  },
  {
    label: "$301k - $500k",
    value: "301-500",
  },
  {
    label: "$501k - $1M",
    value: "501-1000",
  },
  {
    value: "",
    label: "*Reset*",
  },
];
const squarefeetdata = [
  {
    label: "< 2 m3",
    value: "0-1",
  },
  {
    label: "2 - 5 m3",
    value: "2-5",
  },
  {
    label: "> 5 m3",
    value: "6-20",
  },
  {
    value: "",
    label: "*Reset*",
  },
];

const def = {
  location: "",
  minPrice: -100,
  maxPrice: 50000,
  minArea: -1,
  maxArea: 50,
  squarefeet: "",
  propertyType: "",
};

const Filter = () => {
  const [location, setLocation] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [minPrice, setMinPrice] = React.useState(-100);
  const [maxPrice, setMaxPrice] = React.useState(50000);
  const [minArea, setMinArea] = React.useState(-1);
  const [maxArea, setMaxArea] = React.useState(50);
  const [squarefeet, setSquarefeet] = React.useState("");
  const [propertyType, setPropertyType] = React.useState("");
  const [submittedData, setSubmittedData] = React.useState(def);

  const handleChangeLocation = (event) => {
    setLocation(event.target.value);
  };
  const handleChangePrice = (event) => {
    if (event.target.value === "") {
      setMinPrice(def.minPrice);
      setMaxPrice(def.maxPrice);
    } else {
      const priceArray = event.target.value.split("-");
      setMinPrice(priceArray[0]);
      setMaxPrice(priceArray[1]);
    }
    setPrice(event.target.value);
  };
  const handleChangePropertyType = (event) => {
    setPropertyType(event.target.value);
  };
  const handleChangeSquareFeet = (event) => {
    if (event.target.value === "") {
      setMinArea(def.minArea);
      setMaxArea(def.maxArea);
    } else {
      const areaArray = event.target.value.split("-");
      setMinArea(areaArray[0]);
      setMaxArea(areaArray[1]);
    }
    setSquarefeet(event.target.value);
  };

  const handleSubmit = () => {
    setSubmittedData({
      location,
      minPrice,
      maxPrice,
      minArea,
      maxArea,
      squarefeet,
      propertyType,
    });
  };

  return (
    <div className="parent-container">
      <div className="filter-input-container">
        <div className="filter-input">
          <TextField
            inputProps={{
              style: {
                margin: 50,
              },
            }}
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
        </div>

        <div className="filter-input">
          <TextField
            inputProps={{
              style: {
                margin: 50,
              },
            }}
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
        </div>

        <div className="filter-input">
          <TextField
            inputProps={{
              style: {
                margin: 50,
              },
            }}
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
        </div>

        <div className="filter-input">
          <TextField
            inputProps={{
              style: {
                margin: 50,
              },
            }}
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
        </div>
      </div>
      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
      <div className="property-cards">
        <PropertyCards filters={submittedData} />
      </div>
    </div>
  );
};

export default Filter;
