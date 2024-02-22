import React from 'react';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = props => {
  return (
    <div>
      {props.option.map(elem => {
        return (
          <button
            className={css.btn}
            key={elem}
            id={elem}
            onClick={() => {
              props.vote(elem);
            }}
          >
            <span className={css.buttonText}>{elem}</span>
          </button>
        );
      })}
    </div>
  );
};
