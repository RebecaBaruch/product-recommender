// Preferences.js

import React, { useState, useEffect } from 'react';
import MultiSelect from '../MultiSelect';
// import SelectedTags from '../SelectedTags';

function Preferences({
  preferences,
  selectedPreferences = [],
  onPreferenceChange,
}) {
  // const handleTagRemove = (itemToRemove) => {
  //   const updatedSelections = selectedPreferences.filter(
  //     (item) => item !== itemToRemove
  //   );
  //   onPreferenceChange(updatedSelections); // Chama handleChange no Form.js
  // };
  return (
    <div
      className="mb-4"
      role="group"
      aria-labelledby="preferences-group-label"
    >
      <h2 id="preferences-group-label" className="text-lg font-bold mb-2">
        Preferências:
      </h2>

      {/* <SelectedTags
        selections={selectedPreferences}
        onRemove={handleTagRemove}
      /> */}

     
      <MultiSelect
        options={preferences}
        selectedOptions={selectedPreferences}
        onChange={onPreferenceChange}
        placeholder="Clique para selecionar..."
      />
    </div>
  );
}

export default Preferences;
