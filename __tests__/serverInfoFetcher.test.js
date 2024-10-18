import { jest } from '@jest/globals';

import { ServerInfoFetcher } from '../services/ServerInfoFetcher.js';

describe('ServerInfoFetcher', () => {
    let mockGameDig;
    let serverInfoFetcher;
    const mockServerConfig = { type: 'test', host: 'localhost', port: '1234', name: 'TestServer' };

    beforeEach(() => {
        // Create a mock GameDig object
        mockGameDig = {
            query: jest.fn()
        };
        serverInfoFetcher = new ServerInfoFetcher(mockGameDig);
    });

    test('fetchServerInfo should return server info when query is successful', async () => {
        const mockServerInfo = { name: 'TestServer', players: [], maxplayers: 10 };
        
        mockGameDig.query.mockResolvedValue(mockServerInfo);

        const result = await serverInfoFetcher.fetchServerInfo(mockServerConfig);
        
        expect(mockGameDig.query).toHaveBeenCalledWith(mockServerConfig);
        expect(result).toEqual(mockServerInfo);
    });

    test('fetchServerInfo should return error object when query fails', async () => {
      const mockServerConfig = { type: 'test', host: 'localhost', port: '1234', name: 'TestServer' };
      const mockError = new Error('Connection failed');
      
      mockGameDig.query.mockRejectedValue(mockError);
  
      const result = await serverInfoFetcher.fetchServerInfo(mockServerConfig);
      
      expect(mockGameDig.query).toHaveBeenCalledWith(mockServerConfig);
      expect(result).toEqual({ 
          name: mockServerConfig.name, 
          type: mockServerConfig.type,
          error: `Error fetching server info for ${mockServerConfig.name} at ${mockServerConfig.host}:${mockServerConfig.port}: ${mockError.message}`
      });
  });

    test('fetchAllServersInfo should return info for all servers', async () => {
        const mockServerConfigs = [
            { type: 'test1', host: 'localhost', port: '1234', name: 'TestServer1' },
            { type: 'test2', host: 'localhost', port: '5678', name: 'TestServer2' }
        ];
        const mockServerInfo1 = { name: 'TestServer1', players: [], maxplayers: 10 };
        const mockServerInfo2 = { name: 'TestServer2', players: [], maxplayers: 20 };

        mockGameDig.query.mockResolvedValueOnce(mockServerInfo1)
                          .mockResolvedValueOnce(mockServerInfo2);

        const result = await serverInfoFetcher.fetchAllServersInfo(mockServerConfigs);

        expect(mockGameDig.query).toHaveBeenCalledTimes(2);
        expect(result).toEqual([mockServerInfo1, mockServerInfo2]);
    });

    test('fetchAllServersInfo should handle mixed success and failure', async () => {
        const mockServerConfigs = [
            { type: 'test1', host: 'localhost', port: '1234', name: 'TestServer1' },
            { type: 'test2', host: 'localhost', port: '5678', name: 'TestServer2' }
        ];
        const mockServerInfo1 = { name: 'TestServer1', players: [], maxplayers: 10 };
        const mockError = new Error('Connection failed');

        mockGameDig.query.mockResolvedValueOnce(mockServerInfo1)
                          .mockRejectedValueOnce(mockError);

        const result = await serverInfoFetcher.fetchAllServersInfo(mockServerConfigs);

        expect(mockGameDig.query).toHaveBeenCalledTimes(2);
        expect(result).toEqual([
            mockServerInfo1,
            { 
              name: 'TestServer2', 
              type: 'test2',
              error: `Error fetching server info for TestServer2 at localhost:5678: ${mockError.message}`
          }
        ]);
    });
});
