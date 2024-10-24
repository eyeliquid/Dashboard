import GameCard from '../components/games/GameCard';
import { GAMES } from '../constants/games';

const Games = () => (
  <>
    <div className="gap-8 columns-1 md:columns-2 lg:columns-3 xl:columns-4 3xl:columns-5">
      {GAMES.map((game) => (
        <div key={game.name} className="mb-8">
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
  </>
);

export default Games;
