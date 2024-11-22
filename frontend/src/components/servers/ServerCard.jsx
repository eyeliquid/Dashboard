import { useState } from 'react';
import PropTypes from 'prop-types';
import { ServerInfo } from './ServerInfo';
import { GAME_IMAGE_URLS } from '../../constants/gameImageUrls';
import { ServerCardFooter } from './ServerCardFooter';
import { PlayersCard } from './PlayersCard';
import { Badge } from '../ui/badge';

const isSteamGame = (server) => {
  return server.raw?.steamid?.length > 0;
};

const ServerCard = ({ server }) => {
  const [showPlayerList, setShowPlayerList] = useState(false);

  const togglePlayerList = () => setShowPlayerList(!showPlayerList);

  if (showPlayerList) {
    return (
      <PlayersCard
        players={server.players}
        togglePlayerList={togglePlayerList}
        server={server}
      />
    );
  }
//console.log("server",server)
  return (
    <article className="w-[318px] h-[530px] flex flex-col justify-between text-white h-full p-4 bg-slate-700 shadow-lg rounded overflow-hidden border-2 border-gray-500 hover:border-gray-300 cursor-pointer">
      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold line-clamp-1">
            {server.raw ? server.name || server.raw.game || server.raw.gamename : 'Server down'}
          </h2>
          <div
            className={`w-4 h-4 rounded-full m-2 ${
              server.raw ? 'bg-green-500' : 'bg-red-500'
            }`}
          ></div>
        </div>
        {/* Display Steam and Map badges */}
        <div className="flex flex-wrap gap-2 mt-2 mb-3">
          {isSteamGame(server) && <Badge variant="secondary">#steam</Badge>}
        </div>
        <ServerInfo server={server} />
        {GAME_IMAGE_URLS[server.name] ? (
          <div className="h-[285px] flex items-center justify-center">
            <img
              src={GAME_IMAGE_URLS[server.name]}
              alt={server.name || 'Server image'}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        ) : (
          <div className="h-[285px] bg-gray-600 rounded-lg" />
        )}
      </div>
      <ServerCardFooter
        numplayers={server.raw? server.raw.numplayers : "NA"}
        maxplayers={server.raw?.rules?.MaxSpectators ? parseInt(server.raw.rules.MaxSpectators) : server.maxplayers}
        togglePlayerList={togglePlayerList}
        steamId={server.raw?.steamid || null}
        connect={server.connect}
      />
    </article>
  );
};

ServerCard.propTypes = {
  server: PropTypes.object.isRequired,
};

export default ServerCard;
