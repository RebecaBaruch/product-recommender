// Form.js
import React, { useState } from 'react';
import { Preferences, Features, RecommendationType } from './Fields';
import { SubmitButton } from './SubmitButton';
import useProducts from '../../hooks/useProducts';
import useForm from '../../hooks/useForm';
import useRecommendations from '../../hooks/useRecommendations';

function Form({ setRecommendations, onClear }) {
  const { preferences, features, products } = useProducts();
  const { formData, handleChange } = useForm({
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: '',
  });
  const { getRecommendations } = useRecommendations(products);
  const isSubmitDisabled = !formData.selectedRecommendationType;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSubmitDisabled) {
      return;
    }

    onClear();
    const dataRecommendations = getRecommendations(formData);
    setRecommendations(dataRecommendations);
  };

  const handleClear = () => {
    onClear();
    handleChange('selectedPreferences', []); 
    handleChange('selectedFeatures', []);
    handleChange('selectedRecommendationType', '');
  };

  return (
    <form className="flex flex-col gap-4 bg-white p-4 rounded-lg shadow-md" onSubmit={handleSubmit}>
      <Preferences
        preferences={preferences}
        selectedPreferences={formData.selectedPreferences}
        onPreferenceChange={(selected) =>
          handleChange('selectedPreferences', selected)
        }
      />
      <Features
        features={features}
        selectedFeatures={formData.selectedFeatures}
        onFeatureChange={(selected) =>
          handleChange('selectedFeatures', selected)
        }
      />
      <RecommendationType
        selectedValue={formData.selectedRecommendationType}
        onRecommendationTypeChange={(selected) =>
          handleChange('selectedRecommendationType', selected)
        }
      />

      <div className="flex flex-col md:flex-row justify-between gap-2">
        <SubmitButton text="Obter recomendação" disabled={isSubmitDisabled} />

        <button
          type="button"
          onClick={handleClear}
          className="w-full px-3 py-3 border border-blue-500 font-semibold text-blue-500 text-sm md:text-md rounded hover:bg-blue-100 hover:border-blue-100 flex-grow"
          aria-label="Limpar preferências e recomendações" /* Acessibilidade */
        >
          Limpar
        </button>
      </div>
    </form>
  );
}

export default Form;
