import P from 'prop-types';

export const Button = ({ children, onClick, disabled = false }) => {
  return (
    <button disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: P.node.isRequired,
  onClick: P.func.isRequired,
  disabled: P.bool,
};
