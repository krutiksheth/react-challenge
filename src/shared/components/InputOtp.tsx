import React from "react";

interface Props {
  name: string;
  value: string;
  placeholder?: string;
  tabIndex: number;
  onFocus: (event: any) => void;
  onChange: (event: any) => void;
}

function InputOtp({
  name,
  value,
  placeholder,
  onChange,
  onFocus,
  tabIndex,
}: Props) {
  return (
    <input
      type="tel"
      name={name}
      onChange={onChange}
      tabIndex={tabIndex}
      maxLength={1}
      onKeyUp={onFocus}
      autoComplete="off"
      className="border border-gray-500 w-10 h-10 text-center app-otp-box"
    ></input>
  );
}

export default InputOtp;
