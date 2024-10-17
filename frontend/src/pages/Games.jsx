import GameCard from '../components/games/GameCard';
import { GAMES } from '../constants/games';

const Games = () => (
  <div className="h-screen overflow-y-auto no-scrollbar no-scrollbar::-webkit-scrollbar bg-gray-900 text-white">
    <div className="container mx-auto p-4 pb-16">
      <h1 className="text-2xl font-bold mb-8">Which games do we play?</h1>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-8 mb-16">
        {GAMES.map((game) => (
          <div key={game.name} className="[grid-row-end:span_calc(var(--card-height)/10)]">
            <GameCard 
              title={game.name}
            >
              <p className="mb-4">{game.description}</p>
              {game.instructions && (
                <>
                  <p className="font-bold mb-2">How to play?</p>
                  <p>{game.instructions}</p>
                </>
              )}
            </GameCard>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Games;
