import { useState, useEffect } from 'react';
import io from 'socket.io-client';

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL || 'http://localhost:3010';

export function useServerData() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const socket = io(SOCKET_URL);

    socket.on('connect', () => {
      console.log('Connected to WebSocket');
    });

    socket.on('serverUpdate', (serverInfo) => {
      setData(serverInfo);
      setIsLoading(false);
    });

    socket.on('connect_error', (err) => {
      console.error('WebSocket connection error:', err);
      setError('Failed to connect to the server');
      setIsLoading(false);
    });

    // Request initial data
    socket.emit('requestInitialData');

    return () => {
      socket.disconnect();
    };
  }, []);

  return { data, isLoading, error };
}
