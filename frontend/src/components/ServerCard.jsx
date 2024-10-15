import { useState } from 'react';
import PropTypes from 'prop-types'
import { ServerInfo } from './ServerInfo'
import { GAME_IMAGE_URLS } from '../../../constants/gameImageUrls'
import { ServerCardFooter } from './ServerCardFooter';
import { PlayersCard } from './PlayersCard';

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
    <article className="w-[318px] h-[480px] flex-col justify-center text-white h-full p-4 bg-slate-700 shadow-lg rounded overflow-hidden">
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
      <div className="">
        <ServerInfo server={server} />
      </div>
      <div className="w-[302px] h-[270px] flex items-center justify-center">
        <img 
          src={GAME_IMAGE_URLS[server.name] || '/assets/no_image.jpeg'}   
          alt={server.name || 'Server image'} 
          className="max-w-full max-h-full object-contain rounded-lg"
        />
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
