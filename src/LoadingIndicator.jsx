import React from 'react';

const LoadingIndicator = ({ loading }) => {
  if (!loading) return null;

  return (
    <div className="loading-indicator show">
      <i className="fas fa-spinner fa-spin mr-2"></i> Cargando recetas...
    </div>
  );
};

export default LoadingIndicator;