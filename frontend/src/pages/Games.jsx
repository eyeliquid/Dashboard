import GameCard from '../components/games/GameCard';
import { GAMES } from '../constants/games';

const Games = () => (
  <div className="h-screen overflow-y-auto no-scrollbar no-scrollbar::-webkit-scrollbar bg-gray-900 text-white">
    <div className="container mx-auto p-4 pb-16">
      <h1 className="text-2xl font-bold mb-8">Which games do we play?</h1>
      <div className="flex h-full items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 4xl:grid-cols-6 gap-4 mb-16">

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
  </div>
);

export default Games;
