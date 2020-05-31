import React from 'react';
import { Typography } from '@material-ui/core';
import PageContainer from './PageContainer';

export default function UserVariant() {
  return (
    <PageContainer>
      <Typography variant="h2" gutterBottom>
        User variants
      </Typography>
    </PageContainer>
  )
}