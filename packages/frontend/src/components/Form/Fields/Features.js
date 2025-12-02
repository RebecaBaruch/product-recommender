import React from 'react';
import MultiSelect from '../MultiSelect';
function Features({ features, selectedFeatures = [], onFeatureChange }) {
 

  return (
    <div className="mb-4" role="group" aria-labelledby="features-group-label">
      <h2 id="features-group-label" className="text-sm md:text-lg font-bold mb-2">
        Funcionalidades:
      </h2>
      <MultiSelect
        options={features}
        selectedOptions={selectedFeatures}
        onChange={onFeatureChange}
        placeholder="Clique para selecionar..."
      />
    </div>
  );
}

export default Features;
