import Input from "../Input";
import Button from "../Button";
import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [content, setContent] = useState("");

  const inputNameHandler = (value: any) => {
    setName(value);
    return value;
  };

  const inputAgeHandler = (value: any) => {
    setAge(value);
    return value;
  };

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    setContent(`${name}, ${age} years old`);
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center mt-24"
    >
      <Input
        type="text"
        placeholder="Enter your name"
        onBlur={inputNameHandler}
      />
      <Input
        type="number"
        placeholder="Enter your age"
        onBlur={inputAgeHandler}
      />
      <Button />
      <div className="text-white text-2xl mt-20">{content}</div>
    </form>
  );
};

export default Form;
