import Input from '../atoms/Input';
import PropTypes from 'prop-types';

function FormInput({ className, label, type, placeholder, value, name, onChange, classNameInput }) {
  return (
    <div className={`mb-4 w-full lg:w-3/4 ${className}`}>
      <label className="block text-sky-900 text-[20px]">{label}</label>
      <Input type={type} placeholder={placeholder} name={name} value={value} onChange={onChange} className={classNameInput}/>
    </div>
  );
}

FormInput.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    classNameInput: PropTypes.string.isRequired,
  };

export default FormInput;

