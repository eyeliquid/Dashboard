const BASE_PATH = '/downloads';

export const mockDownloads = [
  {
    name: 'Age of Empires',
    size: 1572864,
    modified: '2024-03-15T10:30:00Z',
    category: 'classic',
    description: 'Age of Empires game files and mods',
    path: `${BASE_PATH}/age_of_empires/age_of_empires_dummy.zip`,
    gameFolder: 'age_of_empires'
  },
  {
    name: 'Half-Life',
    size: 52428800,
    modified: '2024-03-10T15:45:00Z',
    category: 'fps',
    description: 'Half-Life game server and required files',
    path: `${BASE_PATH}/half_life/half_life_dummy.zip`,
    gameFolder: 'half_life'
  },
  {
    name: 'Unreal Tournament',
    size: 26214400,
    modified: '2024-03-12T08:20:00Z',
    category: 'fps',
    description: 'Classic Unreal Tournament server files',
    path: `${BASE_PATH}/unrealtournament/unrealtournament_dummy.zip`,
    gameFolder: 'unrealtournament'
  },
  {
    name: 'Unreal Tournament 2024',
    size: 104857600,
    modified: '2024-03-14T11:15:00Z',
    category: 'latest',
    description: 'Latest Unreal Tournament 2024 release',
    path: `${BASE_PATH}/unrealtournament2024/ut2024_dummy.zip`,
    gameFolder: 'unrealtournament2024'
  }
];

export const DOWNLOAD_CATEGORIES = [
  { id: 'all', name: 'All Games' },
  { id: 'fps', name: 'FPS Games' },
  { id: 'classic', name: 'Classic Games' },
  { id: 'latest', name: 'Latest Releases' }
]; 