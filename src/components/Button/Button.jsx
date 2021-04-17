/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
import React from 'react';
import classNames from 'classnames';
import propTypes from 'prop-types';

export const Button = ({
  type = 'button',
  disabled = false,
  onClick,
  title,
  className,
  disClass,
}) => {
  let classes = classNames('btn', className);

  if (disabled) {
    classes = classNames('btn', className, disClass);
  }

  return (
    <button className={classes} type={type} disabled={disabled} onClick={onClick}>
      {title}
    </button>
  );
};

Button.propTypes = {
  onClick: propTypes.func,
  type: propTypes.string,
  title: propTypes.node,
  className: propTypes.string,
  disabled: propTypes.bool,
};

export default Button;
