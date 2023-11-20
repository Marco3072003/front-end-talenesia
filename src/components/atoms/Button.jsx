// TypeScript

// import React from 'react';

// interface ButtonProps {
//   text: string;
//   onClick: () => void;
// }

// const Button: React.FC<ButtonProps> = ({ text, onClick }) => (
//   <button onClick={onClick} className="bg-blue-500 text-white px-4 py-2 rounded">
//     {text}
//   </button>
// );

// export default Button;
import PropTypes from 'prop-types';

function Button({ label, type, className, id, onClick, children}) {
  return (
    <button className={className} type={type} id={id} onClick={onClick}>
      {label}
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;

