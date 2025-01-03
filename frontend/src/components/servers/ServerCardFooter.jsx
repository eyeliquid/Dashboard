import { Users } from 'lucide-react';
import { Button } from '../ui/button';
import PropTypes from 'prop-types';

import { handleJoinGame } from '../../lib/utils';

export const ServerCardFooter = ({
  numplayers,
  maxplayers,
  togglePlayerList,
  steamId,
  connect,
}) => (
  <div className="w-full flex items-center justify-between mt-4">
    <div className="flex items-center">
      <Users className="w-4 h-4" />
      <span className="text-sm ml-1">
        {numplayers || 0} / {maxplayers || 0}
      </span>
    </div>
    <div className="flex space-x-2">
      {steamId && (
        <Button
          className="px-2 py-1 text-xs bg-blue-500 hover:bg-blue-600 rounded"
          onClick={() => handleJoinGame(steamId, connect)}
        >
          Join game
        </Button>
      )}
      {numplayers > 0 && (
        <Button
          onClick={togglePlayerList}
          className="px-2 py-1 text-xs bg-gray-500 hover:bg-gray-600 rounded"
        >
          Playerlist
        </Button>
      )}
    </div>
  </div>
);

ServerCardFooter.propTypes = {
  numplayers: PropTypes.number,
  maxplayers: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  togglePlayerList: PropTypes.func.isRequired,
  steamId: PropTypes.string,
  connect: PropTypes.string.isRequired,
};
