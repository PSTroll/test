import React, { useRef } from "react";

const Input: React.FC<{
  type: string;
  placeholder: string;
  onBlur: (value: any) => {};
}> = ({ type, placeholder, onBlur }) => {
  const inputValue = useRef<HTMLInputElement>(null);

  const onBlurHandler = () => {
    if (inputValue.current != null) {
      return onBlur(inputValue.current.value);
    }
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      ref={inputValue}
      className="bg-slate-900 text-white outline-none p-3 m-5 rounded-xl text-xl max-w-sm w-full"
      onBlur={onBlurHandler}
    />
  );
};

export default Input;
