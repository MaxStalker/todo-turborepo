import styled from "styled-components";

interface Props {
  primary?: boolean;
  size?: "small" | "large";
  color?: string;
}

const sizes = {
  small: "0.5rem",
  large: "1rem",
};

export const Button = styled.button<Props>`
  background-color: ${({ primary, color }) => {
    if (primary) return "red";
    return color || "#555";
  }};
  color: white;
  padding: ${({ size }) => (size ? sizes[size] : "0.5rem")};
  cursor: pointer;
  border: none;
  border-radius: 4px;
  font-weight: bold;

  :hover,
  :focus {
    background-color: green;
  }
`;
