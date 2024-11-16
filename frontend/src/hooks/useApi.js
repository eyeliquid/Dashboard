import { useQuery } from '@tanstack/react-query';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3010';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export function useGetData(endpoint) {
  return useQuery({
    queryKey: [endpoint],
    queryFn: async () => {
      await delay(1000); // 1 second delay
      const response = await fetch(`${API_URL}${endpoint}`);
      return response.json();
    },
  });
}
