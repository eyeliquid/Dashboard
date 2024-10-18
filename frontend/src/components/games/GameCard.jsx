import PropTypes from 'prop-types';
import { GAME_IMAGE_URLS } from '../../constants/gameImageUrls';
import { Button } from '../ui/button';

const GameCard = ({ title, children }) => (
  <div className="bg-gray-800 h-full lg:w-[320px] rounded-lg overflow-hidden shadow-lg transition-all duration-300 border-2 border-gray-500 hover:border-gray-300 cursor-pointer flex flex-col">
    {GAME_IMAGE_URLS[title] && (
      <div className="aspect-w-16 aspect-h-9 p-4 rounded-lg">
        <img
          src={GAME_IMAGE_URLS[title]}
          alt={title || 'Game image'}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    )}
    <div className="p-4 flex flex-col flex-grow">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <div className="text-gray-300 mb-4 flex-grow">{children}</div>
      <div className="mt-auto">
        <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4">
          Download
        </Button>
      </div>
    </div>
  </div>
);

export default GameCard;

GameCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
