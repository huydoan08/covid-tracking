import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import React from "react";
import CartContent from "./cardcontent/cartcontent";

export default function HightLight({ report }) {
  const lastestData = report && report.length ? report[report.length - 1] : [];
  
  const summary = [
    {
      title: "Số ca mắc",
      number: lastestData.Active,
    },
    {
      title: "Số ca khỏi",
      number: lastestData.Confirmed,
    },
    {
      title: "Số ca tử vong",
      number: lastestData.Deaths,
    },
  ];

  return (
    <Grid container spacing={3}>
      {summary.map(item => (
		  <Grid item sm={4} xs={12}>
          <CartContent
            title={item.title}
            count={item.number}
            type={item.type}
          />
        </Grid>
	  ))}
    </Grid>
  );
}
