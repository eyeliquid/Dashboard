const CardParagraph = ({ name, value, truncate = false }) => (
  <>
    <p className={`text-sm mb-1 ${truncate ? 'truncate' : ''}`}>
      <span className="font-semibold">{name}</span> 
      {value}
    </p>
  </>
)

export default CardParagraph;