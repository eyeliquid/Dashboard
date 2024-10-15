import { Users } from 'lucide-react';
import { Button } from './ui/button';
import PropTypes from 'prop-types';

export const ServerCardFooter = ({ numplayers, maxplayers, togglePlayerList, steamId, connect }) => {
  const handleJoinGame = () => {
    if (steamId) {
      const steamURL = `https://steam://connect/${connect}`;
      window.location.href = steamURL;
    }
  };

  return (
    <div className="w-full flex items-center justify-between mt-4">
      <div className="flex items-center">
        <Users className="w-4 h-4" />
        <span className="text-sm ml-1">{numplayers} / {maxplayers}</span>
      </div>
      <div className="flex space-x-2">
        {steamId && (
          <Button 
            className="px-2 py-1 text-xs bg-blue-500 hover:bg-blue-600 rounded"
            onClick={handleJoinGame}
          >
            Join game
          </Button>
        )}
        <Button 
          onClick={togglePlayerList} 
          className="px-2 py-1 text-xs bg-gray-500 hover:bg-gray-600 rounded"
        >
          Playerlist
        </Button>
      </div>
    </div>
  )
}

ServerCardFooter.propTypes = {
  numplayers: PropTypes.number,
  maxplayers: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  togglePlayerList: PropTypes.func.isRequired,
  steamId: PropTypes.string,
  connect: PropTypes.string.isRequired,
}
