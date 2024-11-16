import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function ErrorBoundary({ children }) {
  const [errorState, setErrorState] = useState({ hasError: false, error: null, errorInfo: null });

  useEffect(() => {
    const errorHandler = (error) => {
      // Update error state
      setErrorState({ hasError: true, error, errorInfo: error.stack });
      // You can log the error to an error reporting service
      console.error('Uncaught error:', error);
    };

    // Add event listener for uncaught errors
    window.addEventListener('error', errorHandler);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('error', errorHandler);
  }, []);

  if (errorState.hasError) {
    // You can render any custom fallback UI
    return (
      <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded">
        <h1 className="text-xl font-bold mb-2">Something went wrong.</h1>
        <details className="whitespace-pre-wrap">
          {errorState.error && errorState.error.toString()}
          <br />
          {errorState.errorInfo}
        </details>
      </div>
    );
  }

  return children;
}

export default ErrorBoundary;

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};
