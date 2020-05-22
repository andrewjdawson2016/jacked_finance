import React from 'react';
import { Grid } from '@material-ui/core';
import ModelCard from './ModelCard'

// TODO: move this to pages level
// TODO: introduce constants for page routing
const models = [
  {
    name: "Rental Property",
    description: "Understand how a rental property is expected to do over time. Build projections of cash flow, equity and networth."
  },
  {
    name: "Refinance",
    description: "Understand what goes into a refinanace of a property. Understand if its a good time or not to refinanace."
  },
  {
    name: "MBA Cost",
    description: "Understand the cost of an MBA across different Universities. Understand the true opporunity of getting an MBA."
  },
  {
    name: "Rental Property",
    description: "Understand how a rental property is expected to do over time. Build projections of cash flow, equity and networth."
  },
  {
    name: "Refinance",
    description: "Understand what goes into a refinanace of a property. Understand if its a good time or not to refinanace."
  },
  {
    name: "MBA Cost",
    description: "Understand the cost of an MBA across different Universities. Understand the true opporunity of getting an MBA."
  },
  {
    name: "Rental Property",
    description: "Understand how a rental property is expected to do over time. Build projections of cash flow, equity and networth."
  },
  {
    name: "Refinance",
    description: "Understand what goes into a refinanace of a property. Understand if its a good time or not to refinanace."
  },
  {
    name: "MBA Cost",
    description: "Understand the cost of an MBA across different Universities. Understand the true opporunity of getting an MBA."
  },
]

function ModelsIndex() {
  return (
    <Grid container spacing={4}>
      {models.map((item) =>
        <Grid key={item.name} xs={12} md={6} lg={4} item>
          <ModelCard model={item}/>
        </Grid>
      )}
    </Grid>
  );
}

export default ModelsIndex;