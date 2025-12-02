import React from 'react';
import Checkbox from '../../shared/Checkbox';

function RecommendationType({ onRecommendationTypeChange, selectedValue }) {
  return (
    <div
      className="mb-4"
      role="radiogroup"
      aria-labelledby="recommendation-type-label"
    >
      <h2
        id="recommendation-type-label"
        className="text-sm md:text-lg font-bold mb-2"
      >
        Tipo de Recomendação:
      </h2>
      <div className="w-full flex flex-row items-center justify-between">
        <label
          htmlFor="SingleProduct"
          className=" flex flex-row items-center text-sm md:text-base"
        >
          <Checkbox
            type="radio"
            name="recommendationType"
            value="SingleProduct"
            checked={selectedValue === 'SingleProduct'}
            onChange={() => onRecommendationTypeChange('SingleProduct')}
            className="md:mr-1"
          />
          Produto Único
        </label>
        <label
          htmlFor="MultipleProducts"
          className="flex flex-row items-center text-sm md:text-base"
        >
          <Checkbox
            type="radio"
            name="recommendationType"
            value="MultipleProducts"
            checked={selectedValue === 'MultipleProducts'}
            onChange={() => onRecommendationTypeChange('MultipleProducts')}
            className="md:mr-1"
          />
          Múltiplos Produtos
        </label>
      </div>
    </div>
  );
}

export default RecommendationType;
