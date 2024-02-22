import React from 'react';

export const Section = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.children}
    </div>
  );
};
