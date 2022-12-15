import styled from "styled-components";

interface CheckmarkProps {
  checked: boolean;
}
interface TodoProps extends CheckmarkProps {
  title: string;
}

const TodoContainer = styled.label`
  display: inline-flex;
  align-content: center;
  gap: 8px;
  cursor: pointer;
`

const HiddenCheckbox = styled.input.attrs({
  type: "checkbox",
  "aria-hidden": "true",
})`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const CheckContainer = styled.svg<CheckmarkProps>`
  display: inline-block;
  height: 20px;
  width: 20px;
  background: #fff;
  border: 2px #ddd solid;
  border-radius: 4px;
  padding: 2px;

  ${({ checked }) => {
    return (
      checked &&
      `
      background: #1acb61;
      border-color: #24af5c;
    `
    );
  }}
`;

const Checkmark = ({ checked }: CheckmarkProps) => {
  return (
    <CheckContainer
      aria-hidden="true"
      viewBox="0 0 15 11"
      fill="none"
      checked={checked}
    >
      <path
        d="M2 5L6 9L12 1"
        strokeWidth="3"
        stroke={checked ? "#fff" : "none"}
        strokeLinecap="round"
      />
    </CheckContainer>
  );
};

const Label = styled.span<CheckmarkProps>`
  display: flex;
  align-items: center;
  text-decoration: ${({ checked }) => (checked ? "line-through" : "")};
  color: #bbb;
  
  &:hover{
    color: #111;
    text-decoration: none;
  }
`;

const Todo = ({ title, checked }: TodoProps) => {
  return (
    <TodoContainer>
      <HiddenCheckbox checked={checked} />
      <Checkmark checked={checked} />
      <Label checked={checked}>{title}</Label>
    </TodoContainer>
  );
};
export default Todo;
