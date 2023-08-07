import { useState } from "react";
import uuid from "react-uuid";
import { useSetRecoilState } from "recoil";
import { todoState } from "../atoms/atoms";

const Form = (): JSX.Element => {
  const [value, setValue] = useState("");
  const [text, setText] = useState("");
  const setTodo = useSetRecoilState(todoState);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    setText(event.target.value);
  };

  const onSubmitHandler = () => {
    if (text.length < 1) {
      return;
    }

    setTodo((prev) => [
      ...prev,
      {
        id: uuid(),
        text,
        completed: false,
      },
    ]);

    setValue("");
  };

  return (
    <div>
      <input type="text" onChange={onChangeHandler} value={value} />
      <button onClick={onSubmitHandler}>Add</button>
    </div>
  );
};
export default Form;
