import React from "react";

interface Props {
  name: string;
  value: string;
  placeholder?: string;
  onChange(event: any): any;
}

function Input({ name, value, placeholder, onChange }: Props) {
  return (
    <input
      type="text"
      className="app-input-text shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      name={name}
      id={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    ></input>
  );
}

export default Input;
