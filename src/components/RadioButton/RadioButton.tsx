import React from 'react';
import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 6px;
`;

const StyledRadio = styled.input<{ disabled?: boolean }>`
  accent-color: #007bff;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

export const RadioButton: React.FC<RadioButtonProps> = ({ label, name, value, disabled, onChange }) => {
  return (
    <StyledLabel>
      <StyledRadio
        type="radio"
        name={name}
        value={value}
        disabled={disabled}
        onChange={onChange}
      />
      {label}
    </StyledLabel>
  );
};
