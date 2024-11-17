import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Topbar from './components/Topbar';
import ErrorBoundary from './components/ErrorBoundary';
import { PAGES } from './constants';

function App() {
  return (
    <div className="h-screen w-screen bg-gray-900 overflow-hidden">
      <Topbar />
      <div className="flex flex-1 pt-16 sd:pt-32">
        <ErrorBoundary>
          <main className="w-full">
            <div className="h-screen overflow-y-auto no-scrollbar no-scrollbar::-webkit-scrollbar bg-gray-900 text-white">
              <div className="p-4 pb-16 mt-8 mb-24">
                <div className="flex flex-col h-full items-center justify-center">
                  <Routes>
                    {PAGES.map((page) => {
                      const LazyComponent = lazy(page.element);
                      return (
                        <Route 
                          key={page.path} 
                          path={page.path} 
                          element={
                            <Suspense fallback={<div>Loading...</div>}>
                              <LazyComponent />
                            </Suspense>
                          } 
                        />
                      );
                    })}
                  </Routes>
                </div>
              </div>
            </div>
          </main>
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;
