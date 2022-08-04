import P from 'prop-types';

export const Header = ({ children }) => {
  return <h1>{children}</h1>;
};

Header.propTypes = {
  children: P.node.isRequired,
};
