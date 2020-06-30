import React, { useState } from 'react';

const useSelect = (initialState, options) => {
  const [state, updateState] = useState(initialState);

  const SelectNews = () => (
    <select
      className="browser-default"
      value={state}
      onChange={(e) => updateState(e.target.value)}
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );

  return [state, SelectNews];
};

export default useSelect;
