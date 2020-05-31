import React from 'react';
import { Typography } from '@material-ui/core';
import PageContainer from './PageContainer';
import DisplayTable from './DisplayTable';

export default function FeatureTest() {
  const columns = [
    {
      header: "Name"
    },
    {
      header: "Start Date"
    },
    {
      header: "End Date"
    }
  ]

  return (
    <PageContainer>
      <Typography variant="h2" gutterBottom>
        Feature Tests
      </Typography>
      <DisplayTable columns={columns}></DisplayTable>
    </PageContainer>
  )
}