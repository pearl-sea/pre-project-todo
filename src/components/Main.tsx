import styled from "styled-components";
import Form from "./Form";
import List from "./List";

const Main = (): JSX.Element => {
  return (
    <StyledMain>
      <h1>Todo</h1>
      <Form />
      <List />
    </StyledMain>
  );
};

const StyledMain = styled.main`
  max-width: 60rem;
  width: 90%;
  margin: 0 auto;

  input[type="checkbox"]:checked + span {
    text-decoration-line: line-through;
  }

  span {
    margin: 0 1.25rem 0 0;
  }
`;
export default Main;
