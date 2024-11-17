import { useState } from 'react';
import { mockDownloads, DOWNLOAD_CATEGORIES } from '../mocks/downloads';
import { downloadService } from '../services/downloadService';

function Downloads() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const formatFileSize = (bytes) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return '0 Byte';
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
  };

  const filteredFiles = mockDownloads.filter(file => {
    const matchesCategory = selectedCategory === 'all' || file.category === selectedCategory;
    const matchesSearch = file.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         file.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
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
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Game Downloads</h1>
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Search games..."
            className="px-4 py-2 border rounded-lg flex-grow"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="relative">
            <select
              className="px-4 py-2 border rounded-lg bg-white appearance-none pr-8 w-full"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              aria-label="Select category"
            >
              {DOWNLOAD_CATEGORIES.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
              </svg>
            </div>
          </div>
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
                <div className="mb-1">
                  <span className="font-semibold">Category:</span> {
                    DOWNLOAD_CATEGORIES.find(cat => cat.id === file.category)?.name
                  }
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
        
        {filteredFiles.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No games found matching your criteria
          </div>
        )}
      </div>
    </div>
  );
}

export default Downloads;
