import styled from "styled-components";

interface CheckmarkProps {
  checked: boolean;
}
interface TodoProps extends CheckmarkProps {
  title: string;
}

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
  margin-right: 4px;

  ${({ checked }) => {
    return (
      checked &&
      `
      background: purple;
      border-color: purple;
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
        d="M1 4.5L5 9L14 1"
        strokeWidth="2"
        stroke={checked ? "#fff" : "none"}
      />
    </CheckContainer>
  );
};

const Todo = ({ title, checked }: TodoProps) => {
  return (
    <label>
      <HiddenCheckbox checked={checked} />
      <Checkmark checked={checked} />
      {title}
    </label>
  );
};
export default Todo;
