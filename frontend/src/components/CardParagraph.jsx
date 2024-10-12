import PropTypes from 'prop-types';

const CardParagraph = ({ name, value, truncate = false }) => (
  <>
    <p className={`text-sm mb-1 ${truncate ? 'truncate' : ''}`}>
      <span className="font-semibold">{name}</span> 
      {value}
    </p>
  </>
)

export default CardParagraph;

CardParagraph.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  truncate: PropTypes.bool
}