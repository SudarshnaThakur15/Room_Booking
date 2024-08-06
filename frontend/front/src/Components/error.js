import React from 'react'
import Alert from 'react-bootstrap/Alert';

function Errorcp(message) {
  return (
    <div> <>
    {
      <Alert key="danger" variant="danger">
        {message.message}
      </Alert>
    }
  </></div>
  )
}


export default Errorcp;