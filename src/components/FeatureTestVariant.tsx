import React from 'react';
import { Typography } from '@material-ui/core';
import PageContainer from './PageContainer';

export default function FeatureTestVariant() {
  return (
    <PageContainer>
      <Typography variant="h2" gutterBottom>
        Feature test variants
      </Typography>
    </PageContainer>
  )
}