export class ServerInfoFetcher {
  constructor(gameDig) {
    this.gameDig = gameDig;
  }

  async fetchAllServersInfo(serverConfigs) {
    const serverInfoPromises = serverConfigs.map((config) =>
      this.fetchServerInfo(config),
    );
    return Promise.all(serverInfoPromises);
  }

  async fetchServerInfo(serverConfig) {
    try {
      return await this.gameDig.query(serverConfig);
    } catch (error) {
      const errorMessage = `Error fetching server info for ${serverConfig.name} at ${serverConfig.host}:${serverConfig.port}: ${error.message}`;
      console.error(errorMessage);

      return {
        name: serverConfig.name,
        type: serverConfig.type,
        error: errorMessage,
      };
    }
  }
}
