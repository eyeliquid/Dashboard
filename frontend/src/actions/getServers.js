const API_URL = 'http://localhost:3010';

export async function getServers() {
  try {
    const response = await fetch(`${API_URL}/api/servers`);
    if (!response.ok) {
      throw new Error('Failed to fetch servers');
    }
    const data = await response.json();
    return { data, error: null };
  } catch (error) {
    return { data: null, error: error.message };
  }
}