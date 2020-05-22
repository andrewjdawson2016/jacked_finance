import React from 'react';
import { Grid } from '@material-ui/core';
import ModelCard from '../components/ModelCard';

// TODO: this will come from a call to fetch from API backend
// TODO: eventually this will become part of the redux container
const models = [
  {
    id: "2036db24-f3c0-4496-a117-70bd799fbc70",
    name: "Rental Property",
    description: "Understand how a rental property is expected to do over time. Build projections of cash flow, equity and networth."
  },
  {
    id: "2036db24-f3c0-4496-a117-70bd799fbc71",
    name: "Refinance",
    description: "Understand what goes into a refinanace of a property. Understand if its a good time or not to refinanace."
  },
  {
    id: "2036db24-f3c0-4496-a117-70bd799fbc72",
    name: "MBA Cost",
    description: "Understand the cost of an MBA across different Universities. Understand the true opporunity of getting an MBA."
  },
  {
    id: "2036db24-f3c0-4496-a117-70bd799fbc73",
    name: "Rental Property",
    description: "Understand how a rental property is expected to do over time. Build projections of cash flow, equity and networth."
  },
  {
    id: "2036db24-f3c0-4496-a117-70bd799fbc74", // TODO: these IDs will come from mongodb on backend side of things
    name: "Refinance",
    description: "Understand what goes into a refinanace of a property. Understand if its a good time or not to refinanace."
  },
  {
    id: "2036db24-f3c0-4496-a117-70bd799fbc75",
    name: "MBA Cost",
    description: "Understand the cost of an MBA across different Universities. Understand the true opporunity of getting an MBA."
  },
  {
    id: "2036db24-f3c0-4496-a117-70bd799fbc76",
    name: "Rental Property",
    description: "Understand how a rental property is expected to do over time. Build projections of cash flow, equity and networth."
  },
  {
    id: "2036db24-f3c0-4496-a117-70bd799fbc77",
    name: "Refinance",
    description: "Understand what goes into a refinanace of a property. Understand if its a good time or not to refinanace."
  },
  {
    id: "2036db24-f3c0-4496-a117-70bd799fbc78",
    name: "MBA Cost",
    description: "Understand the cost of an MBA across different Universities. Understand the true opporunity of getting an MBA."
  },
]

function Index() {
  return (
    <Grid container>
      <Grid item xs={1} md={2}/>
      <Grid item xs={10} md={8}>
        <Grid container spacing={4}>
          {models.map((item) =>
            <Grid key={item.id} xs={12} md={6} lg={4} item>
              <ModelCard model={item}/>
            </Grid>
          )}
        </Grid>
      </Grid>
      <Grid item xs={1} md={2}/>
  </Grid>
  )
}

export default Index;