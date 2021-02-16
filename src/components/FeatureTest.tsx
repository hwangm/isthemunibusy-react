import React, { useEffect, useState } from 'react';
import { Button, Snackbar, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import PageContainer from './PageContainer';
import DisplayTable from './DisplayTable';
import useWebSocket, { ReadyState } from 'react-use-websocket'

export default () => {
  //Public API that will echo messages sent to it back to the client
  const [socketUrl, setSocketUrl] = useState('ws://localhost:8080/websocket');
  const [lastMessageSnackbarOpen, setLastMessageSnackbarOpen] = useState(false);

  const {
    sendMessage,
    lastMessage,
    readyState,
  } = useWebSocket(socketUrl);

  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState];

  const handleSendWSMessage = () => {
    sendMessage("This is cool")
  }

  const handleCloseSnackbar = () => {
    setLastMessageSnackbarOpen(false)
  }

  useEffect(() => {
    if (lastMessage) {
      setLastMessageSnackbarOpen(true)
    }
  }, [lastMessage])

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
      <Button onClick={handleSendWSMessage}>
        Send Message to Websocket
      </Button>
      <div>The WebSocket is currently {connectionStatus}</div>
      <Snackbar open={lastMessageSnackbarOpen} autoHideDuration={3000} onClose={handleCloseSnackbar}>
        <Alert severity="info">Message received: {lastMessage?.data}</Alert>
      </Snackbar>
    </PageContainer>
  )
}