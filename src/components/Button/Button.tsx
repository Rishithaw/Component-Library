import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.type';

const StyledButton = styled.button<{ disabled?: boolean; backgroundColor?: string }>`
  background-color: ${(props) => (props.disabled ? '#ccc' : props.backgroundColor || '#007bff')};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

export const Button: React.FC<ButtonProps> = ({ label, disabled, backgroundColor, onClick }) => {
  return (
    <StyledButton disabled={disabled} backgroundColor={backgroundColor} onClick={onClick}>
      {label}
    </StyledButton>
  );
};

export default Button;