import { X } from 'lucide-react';
import PropTypes from 'prop-types';
import PlayerList from './PlayerList';
import { Button } from './ui/button';

export const PlayersCard = ({ players, togglePlayerList }) => (
  <article className="w-[318px] h-[480px] flex flex-col text-white p-4 bg-slate-700 shadow-lg rounded overflow-hidden">
    <div className="flex items-center justify-between mb-2">
      <h2 className="text-lg font-bold line-clamp-1">Player List</h2>
      <Button 
        onClick={togglePlayerList} 
        className="text-gray-300 hover:text-white"
      >
        <X className="w-5 h-5" />
      </Button>
    </div>
    <PlayerList players={players || []} />
  </article>
)

PlayersCard.propTypes = {
  players: PropTypes.array.isRequired,
  numplayers: PropTypes.number,
  maxplayers: PropTypes.number,
  togglePlayerList: PropTypes.func.isRequired,
}