import React, { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { todoState } from "../atoms/atoms";

const List = (): JSX.Element => {
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState("");
  const setTodo = useSetRecoilState(todoState);
  const todos = useRecoilValue(todoState);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const onCheckboxHandler = (id: string) => {
    const checkedTodo = todos.map((el) => {
      if (el.id === id) {
        return { ...el, completed: !el.completed };
      }
      return el;
    });

    setTodo(checkedTodo);
  };

  const onUpdateStartHandler = (id: string) => {
    setIsUpdating(id);
  };

  const onUpdateHandler = (id: string) => {
    const updatedTodo = todos.map((el) => {
      if (el.id === id) {
        return { ...el, text: text };
      }
      return el;
    });

    setTodo(updatedTodo);
    setIsUpdating("");
  };

  const onDeleteHandler = (id: string) => {
    const filteredTodo = todos.filter((el) => el.id !== id);

    setTodo(filteredTodo);
  };

  return (
    <>
      {todos.length > 0 && <p>할일 : {todos.length}개</p>}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              onChange={() => onCheckboxHandler(todo.id)}
            />
            {isUpdating === todo.id ? (
              <input
                type="text"
                defaultValue={todo.text}
                onChange={onChangeHandler}
              />
            ) : (
              <span>{todo.text}</span>
            )}
            <button
              onClick={
                isUpdating
                  ? () => onUpdateHandler(todo.id)
                  : () => onUpdateStartHandler(todo.id)
              }
            >
              수정
            </button>
            <button onClick={() => onDeleteHandler(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </>
  );
};
export default List;
