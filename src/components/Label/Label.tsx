import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.label<{ color?: string; disabled?: boolean }>`
  display: inline-block;
  font-size: 1em;
  color: ${(props) => (props.disabled ? '#999' : props.color || '#000')};
  margin-bottom: 5px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
`;

export const Label: React.FC<LabelProps> = ({ text, color, disabled }) => {
  return (
    <StyledLabel color={color} disabled={disabled}>
      {text}
    </StyledLabel>
  );
};
