// MultiSelect.js (Versão Simples - Dropdown com Checkboxes)
import React, { useState, useRef, useEffect } from 'react';

/**
 * Componente Dropdown que gerencia seleção múltipla via checkboxes.
 * NÃO exibe as tags internamente.
 * * @param {string[]} options - Lista de todas as opções disponíveis.
 * @param {string[]} selectedOptions - Lista das opções atualmente selecionadas.
 * @param {function} onChange - Callback que recebe a nova lista de selecionados.
 * @param {string} placeholder - Texto de placeholder.
 */
function MultiSelect({ options, selectedOptions, onChange, placeholder }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Fecha o dropdown se o usuário clicar fora do componente
  useEffect(() => {
    const handler = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Função para adicionar ou remover uma opção, e envia a lista completa de volta
  const toggleOption = (option) => {
    let updatedSelections;
    
    if (selectedOptions.includes(option)) {
      // Remove a opção
      updatedSelections = selectedOptions.filter((item) => item !== option);
    } else {
      // Adiciona a opção
      updatedSelections = [...selectedOptions, option];
    }
    
    // Notifica o componente pai (Preferences.js) com a lista atualizada
    onChange(updatedSelections);
  };

  return (
    <div className="relative w-full" ref={containerRef}>
      <div
        className="border border-gray-300 bg-white p-2 min-h-10 rounded-lg cursor-pointer flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
        // O placeholder muda para mostrar quantas opções estão selecionadas
        aria-label={selectedOptions.length > 0 
                    ? `${selectedOptions.length} selecionadas` 
                    : placeholder}
      >
        <span className={selectedOptions.length > 0 ? "text-gray-800" : "text-gray-500"}>
          {selectedOptions.length > 0 
            ? `${selectedOptions.length} ${selectedOptions.length === 1 ? 'item' : 'itens'} selecionados`
            : placeholder}
        </span>
        
        <span className={`text-gray-500 transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}>▼</span>
      </div>

      {/* Dropdown com a Lista de Opções e Checkboxes */}
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 border border-gray-300 bg-white max-h-60 overflow-y-auto shadow-lg rounded-lg">
          {options.map((option) => (
            <div
              key={option}
              className="p-3 hover:bg-gray-100 cursor-pointer flex items-center"
              onClick={() => toggleOption(option)}
            >
              <input 
                type="checkbox"
                checked={selectedOptions.includes(option)}
                readOnly
                className="mr-3 h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MultiSelect;