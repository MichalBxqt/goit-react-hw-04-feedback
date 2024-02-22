import React from 'react';

export const Statistic = props => {
  return (
    <div>
      <h2>Statistic</h2>
      <p>Good: {props.good}</p>
      <p>Neutral: {props.neutral}</p>
      <p>Bad: {props.bad}</p>
      <p>Total: {props.total()}</p>
      <p>Positive feedback: {props.countPositive()} %</p>
    </div>
  );
};
