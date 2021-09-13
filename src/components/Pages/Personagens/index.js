import React from 'react';
import Characterbox from '../../CharacterBox';

const Personagens = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <h1 style={{position: 'absolute', top: '150px'}}>Personagens</h1>
      <Characterbox />
    </div>
  );
};

export default Personagens;