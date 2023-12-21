import React from 'react';

function Button(props) {
  return <button className={props.buttonStyle}>{props.buttonText}</button>;
}

export default Button;
