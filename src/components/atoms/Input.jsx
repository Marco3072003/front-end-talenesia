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

