import React from "react";

export const Input = ({ label, onChange, type, className, placeholder }) => {
  if (type === "textarea") {
    return (
      <label htmlFor={label}>
        <input
          id={label}
          type="textarea"
          className={className}
          onChange={onChange}
          placeholder={placeholder}
        />
      </label>
    );
  }

  if (type === "password") {
    return (
      <label htmlFor={label}>
        <input
          id={label}
          type="password"
          placeholder={placeholder}
          className={className}
          onChange={onChange}
        />
      </label>
    );
  }

  if (type === "checkbox") {
    return (
      <label htmlFor={label}>
        <input
          id={label}
          type="checkbox"
          className={className}
          onChange={onChange}
        />
        {label}
      </label>
    );
  }

  if (type === "email") {
    return (
      <label htmlFor={label}>
        <input
          id={label}
          type="email"
          placeholder={placeholder}
          className={className}
          onChange={onChange}
          required
        />
      </label>
    );
  }
  if (type === "search") {
    return (
      <label htmlFor={label}>
        <input
          id={label}
          type="search"
          placeholder={placeholder}
          className={className}
          onChange={onChange}
        />
      </label>
    );
  }

  return (
    <label htmlFor={label}>
      <input
        id={label}
        type="text"
        className={className}
        placeholder={placeholder}
        onChange={onChange}
      />
    </label>
  );
};
