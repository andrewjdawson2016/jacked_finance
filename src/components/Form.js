import React from "react";
import { useState } from "react";
import Input from "@material-ui/core/Input";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "25ch",
  },
}));

export default function Form() {
  const classes = useStyles();
  const [propertyValues, setPropertyValues] = useState({
    price: 500000,
    interestRate: 4,
    loanTerm: 30,
  });

  const [costsValues, setCostsValues] = useState({
    firstYearTaxes: 4000,
    taxIncreasePercentage: 3,
    firstYearInsurance: 5000,
    insuranceIncreasePercentage: 3,
    firstYearMaintenance: 4000,
    maintenanceIncreasePercentage: 3,
  });

  const [rentalValues, setRentalValues] = useState({
    firstYearRentalIncome: 24000,
    percentageVacancyRate: 5,
    percentageRentIncrease: 3,
  });

  const handleChange = (state, setState, prop) => (event) => {
    setState({ ...state, [prop]: event.target.value });
  };

  return (
    <Grid container direction="column" className={classes.root}>
      <Grid container spacing={10}>
        <Grid item xs={4}>
          <FormControl fullWidth className={classes.margin} variant="standard">
            <InputLabel htmlFor="standard-adornment-amount">
              Purchase Price
            </InputLabel>
            <Input
              value={propertyValues.price}
              onChange={handleChange(
                propertyValues,
                setPropertyValues,
                "price"
              )}
              id="standard-adornment-amount"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
            />
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth className={classes.margin} variant="standard">
            <InputLabel htmlFor="standard-adornment-amount">
              Interest Rate
            </InputLabel>
            <Input
              value={propertyValues.interestRate}
              onChange={handleChange(
                propertyValues,
                setPropertyValues,
                "interestRate"
              )}
              id="standard-adornment-amount"
              endAdornment={<InputAdornment position="end">%</InputAdornment>}
            />
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth className={classes.margin} variant="standard">
            <InputLabel htmlFor="standard-adornment-amount">
              Loan Term
            </InputLabel>
            <Input
              value={propertyValues.loanTerm}
              onChange={handleChange(
                propertyValues,
                setPropertyValues,
                "loanTerm"
              )}
              id="standard-adornment-amount"
              endAdornment={
                <InputAdornment position="end">Years</InputAdornment>
              }
            />
          </FormControl>
        </Grid>
      </Grid>
      <Grid container spacing={10}>
        <Grid item xs={6}>
          <FormControl fullWidth className={classes.margin} variant="standard">
            <InputLabel htmlFor="standard-adornment-amount">
              First Year Taxes
            </InputLabel>
            <Input
              value={costsValues.firstYearTaxes}
              onChange={handleChange(
                costsValues,
                setCostsValues,
                "firstYearTaxes"
              )}
              id="standard-adornment-amount"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth className={classes.margin} variant="standard">
            <InputLabel htmlFor="standard-adornment-amount">
              Annual Taxes Percentage Increase
            </InputLabel>
            <Input
              value={costsValues.taxIncreasePercentage}
              onChange={handleChange(
                costsValues,
                setCostsValues,
                "taxIncreasePercentage"
              )}
              id="standard-adornment-amount"
              endAdornment={<InputAdornment position="end">%</InputAdornment>}
            />
          </FormControl>
        </Grid>
      </Grid>
      <Grid container spacing={10}>
        <Grid item xs={6}>
          <FormControl fullWidth className={classes.margin} variant="standard">
            <InputLabel htmlFor="standard-adornment-amount">
              First Year Insurance
            </InputLabel>
            <Input
              value={costsValues.firstYearInsurance}
              onChange={handleChange(
                costsValues,
                setCostsValues,
                "firstYearInsurance"
              )}
              id="standard-adornment-amount"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth className={classes.margin} variant="standard">
            <InputLabel htmlFor="standard-adornment-amount">
              Annual Insurance Percentage Increase
            </InputLabel>
            <Input
              value={costsValues.insuranceIncreasePercentage}
              onChange={handleChange(
                costsValues,
                setCostsValues,
                "insuranceIncreasePercentage"
              )}
              id="standard-adornment-amount"
              endAdornment={<InputAdornment position="end">%</InputAdornment>}
            />
          </FormControl>
        </Grid>
      </Grid>
      <Grid container spacing={10}>
        <Grid item xs={6}>
          <FormControl fullWidth className={classes.margin} variant="standard">
            <InputLabel htmlFor="standard-adornment-amount">
              First Year Maintenance
            </InputLabel>
            <Input
              value={costsValues.firstYearMaintenance}
              onChange={handleChange(
                costsValues,
                setCostsValues,
                "firstYearMaintenance"
              )}
              id="standard-adornment-amount"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth className={classes.margin} variant="standard">
            <InputLabel htmlFor="standard-adornment-amount">
              Annual Maintenance Percentage Increase
            </InputLabel>
            <Input
              value={costsValues.maintenanceIncreasePercentage}
              onChange={handleChange(
                costsValues,
                setCostsValues,
                "maintenanceIncreasePercentage"
              )}
              id="standard-adornment-amount"
              endAdornment={<InputAdornment position="end">%</InputAdornment>}
            />
          </FormControl>
        </Grid>
      </Grid>
      <Grid container spacing={10}>
        <Grid item xs={4}>
          <FormControl fullWidth className={classes.margin} variant="standard">
            <InputLabel htmlFor="standard-adornment-amount">
              First Year Rental Income
            </InputLabel>
            <Input
              value={rentalValues.firstYearRentalIncome}
              onChange={handleChange(
                rentalValues,
                setRentalValues,
                "firstYearRentalIncome"
              )}
              id="standard-adornment-amount"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
            />
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth className={classes.margin} variant="standard">
            <InputLabel htmlFor="standard-adornment-amount">
              Annual Vacancy Rate
            </InputLabel>
            <Input
              value={rentalValues.percentageVacancyRate}
              onChange={handleChange(
                rentalValues,
                setRentalValues,
                "percentageVacancyRate"
              )}
              id="standard-adornment-amount"
              endAdornment={<InputAdornment position="end">%</InputAdornment>}
            />
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth className={classes.margin} variant="standard">
            <InputLabel htmlFor="standard-adornment-amount">
              Annual Rent Increase
            </InputLabel>
            <Input
              value={rentalValues.percentageRentIncrease}
              onChange={handleChange(
                rentalValues,
                setRentalValues,
                "percentageRentIncrease"
              )}
              id="standard-adornment-amount"
              endAdornment={<InputAdornment position="end">%</InputAdornment>}
            />
          </FormControl>
        </Grid>
      </Grid>
    </Grid>
  );
}
