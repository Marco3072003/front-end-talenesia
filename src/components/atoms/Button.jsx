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

