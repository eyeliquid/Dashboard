import PropTypes from 'prop-types';

const Card = ({ title, children }) => (
  <div className="bg-gray-800 rounded-lg p-4 mb-4">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <div className="text-gray-300">{children}</div>
  </div>
);

export default Card;

Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};