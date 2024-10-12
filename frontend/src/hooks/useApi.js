import { useQuery } from '@tanstack/react-query'

const API_URL = 'http://localhost:3010'

export function useGetData(endpoint) {
  return useQuery({
    queryKey: [endpoint],
    queryFn: () => fetch(`${API_URL}${endpoint}`).then(res => res.json())
  })
}
