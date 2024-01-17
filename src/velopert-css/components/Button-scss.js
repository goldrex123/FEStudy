import React from 'react';
import classNames from 'classnames';
import './Button.scss';

function Button({ children, size, color, outline, fullWidth, ...rest }) {
  return (
    // outline, fullWidth은 객체 안에 집어 넣음 -> 값이 true 일때만 표출 할 수 있다
    <button
      className={classNames('Button', size, color, { outline, fullWidth })}
      {...rest}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  size: 'medium',
  color: 'blue',
};

export default Button;
