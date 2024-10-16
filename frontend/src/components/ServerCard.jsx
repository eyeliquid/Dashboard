import { useState } from 'react';
import PropTypes from 'prop-types'
import { ServerInfo } from './ServerInfo'
import { GAME_IMAGE_URLS } from '../../../constants/gameImageUrls'
import { ServerCardFooter } from './ServerCardFooter';
import { PlayersCard } from './PlayersCard';
import { Badge } from './ui/badge';
import { isSteamGame } from '../lib/utils';
export const ServerCard = ({ server }) => {
  const [showPlayerList, setShowPlayerList] = useState(false);

  const togglePlayerList = () => setShowPlayerList(!showPlayerList);

  if (showPlayerList) {
    return (
      <PlayersCard 
        players={server.players || []} 
        togglePlayerList={togglePlayerList}
        server={server}
      />
    );
  }

  return (
    <article className="w-[318px] flex flex-col justify-between text-white h-full p-4 bg-slate-700 shadow-lg rounded overflow-hidden border-2 border-gray-500 hover:border-gray-300 cursor-pointer">
      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold line-clamp-1">{server.raw ?
            server.name || server.raw.game || server.raw.gamename : 'Server down'}</h2>
          <div 
            className={`w-4 h-4 rounded-full m-2 ${
              server.numplayers && server.numplayers > 0 ? 'bg-green-500' : 'bg-red-500'
            }`}
          >
          </div>
        </div>
        {/* Will make badges more dynamic later */}
        {isSteamGame && 
          <div className="flex flex-wrap gap-2 mt-2 mb-3">
            <Badge variant="secondary">#steam</Badge>
          </div>
        }
        <ServerInfo server={server} />
        <div className="w-[302px] h-[285px] flex items-center justify-center">
          <img 
            src={GAME_IMAGE_URLS[server.name] || '/assets/no_image.jpeg'}   
            alt={server.name || 'Server image'} 
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>
      </div>
      <ServerCardFooter 
        numplayers={server.numplayers} 
        maxplayers={server.maxplayers} 
        togglePlayerList={togglePlayerList}
        steamId={server.raw?.steamid || null}
        connect={server.connect}
      />
    </article>
  );
}

ServerCard.propTypes = {
  server: PropTypes.object.isRequired,
}
