import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 24,
    marginBottom: 24
  }
}));

interface PageContainerProps {}

export default function PageContainer(props:React.PropsWithChildren<PageContainerProps>) {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.container}>
      {props.children}
    </Container>
  )
}