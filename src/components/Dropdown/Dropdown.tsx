import React from 'react';
import styled from 'styled-components';
import {DropdownProps} from './Dropdown.types';

const StyledSelect = styled.select<{ disabled?: boolean }>`
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: ${(props) => (props.disabled ? '#eee' : 'white')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

export const Dropdown: React.FC<DropdownProps> = ({ options, disabled, onChange }) => {
  return (
    <StyledSelect disabled={disabled} onChange={onChange}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
};