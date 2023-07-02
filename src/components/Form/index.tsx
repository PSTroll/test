import Input from "../Input";
import Button from "../Button";
import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  let content = "";

  const inputNameHandler = (value: any) => {
    setName(value);
    return value;
  };

  const inputAgeHandler = (value: any) => {
    setAge(value);
    return value;
  };

  const onSubmitHandler = () => {
    content = `${name} + ${age} yo`;
  };

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col items-center">
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
      {content}
    </form>
  );
};

export default Form;
