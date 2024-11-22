const BASE_PATH = '\\SUPERdrive\lan\Ermelan_Games';

// Helper function to parse directory structure and create download entries
function parseDirectoryStructure(lines) {
  const games = new Set();
  
  lines.forEach(line => {
    // Look for lines that start with "+---" and get the game directory
    const match = line.match(/\+---([^/\n]+)$/);
    if (match) {
      const gameName = match[1].trim();
      // Filter out subdirectories and special characters
      if (line.startsWith('+---') && !gameName.startsWith('_') && !gameName.startsWith('.')) {
        games.add(gameName);
      }
    }
  });

  return Array.from(games).map(game => ({
    name: game,
    description: `Full game directory for ${game}`,
    path: `${BASE_PATH}/${game}`,
    category: 'game',
    // We'll let the OS handle the actual file size display
    size: null
  }));
}

export const DOWNLOAD_CATEGORIES = [
  { id: 'all', name: 'All Categories' },
  { id: 'game', name: 'Games' }
];

export const mockDownloads = parseDirectoryStructure([
  // ... content from langames.txt ...
]);

