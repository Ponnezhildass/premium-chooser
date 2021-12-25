import React from "react";

const formInput = (
  value,
  onChange,
  label,
  cssClass = "input-container ic2"
) => {
  const id = Math.floor(Math.random() * 100 + 1);
  return (
    <div className={cssClass}>
      <input
        id={id}
        className="input"
        type="text"
        placeholder=" "
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <div className="cut"></div>
      <label for={id} className="placeholder">
        {label}
      </label>
    </div>
  );
};

const submitButton = (onChange, labelText) => {
  return (
    <button type="text" className="submit" onClick={onChange}>
      {labelText}
    </button>
  );
};

export { formInput, submitButton };
