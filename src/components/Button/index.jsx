/* eslint-disable react/jsx-props-no-spreading */
const Button = ({ value }, ...props) => (
  <button
    type="submit"
    {...props}
  >
    {value}
  </button>
);

export default Button;
