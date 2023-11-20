// TypeScript

// import React from 'react';

// interface InputProps {
//   type: string;
//   placeholder: string;
//   value: string;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
// }

// const Input: React.FC<InputProps> = ({ type, placeholder, value, onChange }) => (
//   <input
//     type={type}
//     placeholder={placeholder}
//     value={value}
//     onChange={onChange}
//     className="border rounded px-3 py-2 w-full"
//   />
// );
import PropTypes from 'prop-types';

function Input({ type, placeholder, value, onChange, className ,name}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      defaultValue={value}
      onChange={onChange}
      name={name}
      className={className}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};


export default Input;

