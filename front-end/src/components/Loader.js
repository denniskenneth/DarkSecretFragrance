import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = () => {
  return (
    <Spinner
      animation='border'
      role='status'
      style={{
        width: '100px',
        height: '100px',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignSelf: 'center',
      }}
    >
      <span class='sr-only'>Loading...</span>
    </Spinner>
  );
};

export default Loader;
