export const downloadService = {
  async downloadFile(path) {
    try {
      // For local network shares, we can try to open the directory directly
      // This will open the file explorer to the network location
      window.open(path, '_blank');
    } catch (error) {
      console.error('Failed to open network location:', error);
      throw new Error('Could not access network location. Please check your network connection and permissions.');
    }
  }
}; 