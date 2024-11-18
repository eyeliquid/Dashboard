import { useState } from 'react';
import { mockDownloads } from '../mocks/downloads';
import { downloadService } from '../services/downloadService';

function Downloads() {
  const [searchTerm, setSearchTerm] = useState('');

  const formatFileSize = (bytes) => {
    if (bytes === null) return 'Variable';
    
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return '0 Byte';
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
  };

  const filteredFiles = mockDownloads.filter(file => {
    return file.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
           file.description.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleDownload = async (file) => {
    try {
      await downloadService.downloadFile(file.path);
    } catch (error) {
      alert('Failed to download file. Please try again.', error);
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Game Downloads</h1>
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search games..."
            className="px-4 py-2 border rounded-lg w-full max-w-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="gap-8 columns-1 md:columns-2 lg:columns-3 xl:columns-4">
        {filteredFiles.map((file) => (
          <div key={file.name} className="mb-8">
            <div className="border rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow break-inside-avoid">
              <h2 className="text-2xl font-bold mb-2 text-black">{file.name}</h2>
              <p className="text-gray-600 mb-4">{file.description}</p>
              <div className="text-sm text-gray-500 mb-4">
                <div className="mb-1">
                  <span className="font-semibold">Size:</span> {formatFileSize(file.size)}
                </div>
              </div>
              <button
                onClick={() => handleDownload(file)}
                className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Download
              </button>
            </div>
          </div>
        ))}
      </div>
        
      {filteredFiles.length === 0 && (
        <div className="w-full text-center py-2 text-gray-500">
          No games found matching your criteria
        </div>
      )}
    </div>
  );
}

export default Downloads;
