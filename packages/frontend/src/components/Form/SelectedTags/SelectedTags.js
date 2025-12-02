// SelectedTags.js
import React from 'react';

/**
 * Componente que renderiza a lista de tags selecionadas.
 * @param {string[]} selections - Lista dos itens selecionados (ex: ['Relatórios...', 'Integração...']).
 * @param {function} onRemove - Função para remover um item da lista.
 */
function SelectedTags({ selections, onRemove}) {
  if (selections.length === 0) {
    return null;
  }

  return (
    <div className="mt-4 mb-4" aria-label="Selected Tags">
      <div className="flex flex-wrap gap-2">
        {selections.map((item) => (
          <span
            key={item}
            className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm flex items-center shadow-sm"
          >
            {item}
            <button
              type="button"
              onClick={() => onRemove(item)}
              className="ml-2 text-gray-600 hover:text-red-600 font-bold"
              aria-label={`Remover ${item}`}
            >
              &times;
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}

export default SelectedTags;