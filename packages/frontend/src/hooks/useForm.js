// useForm.js
import { useState } from 'react';

const useForm = (initialState) => {
  const [formData, setFormData] = useState(initialState);

  /**
   * @function handleChange
   * * Atualiza o estado do formulário (formData) para um campo específico.
   * * Foi alterado para usar a função de callback (prevData) do setFormData para garantir
   * que a atualização do estado utilize o valor anterior mais recente.
   * Isso previne o problema de "Stale State" (Estado Defasado), crucial para evitar
   * inconsistências quando múltiplos campos são atualizados rapidamente, como no reset
   * do formulário (botão "Limpar").
   * * @param {string} field - O nome do campo a ser atualizado (ex: 'selectedPreferences').
   * @param {any} value - O novo valor do campo.
   */
  const handleChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  return { formData, handleChange };
};

export default useForm;
