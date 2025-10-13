import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';

const StyledText = styled.p<{ color?: string; size?: string; disabled?: boolean }>`
  color: ${(props) => (props.disabled ? '#aaa' : props.color || '#000')};
  font-size: ${(props) => props.size || '16px'};
  margin: 0;
`;

export const Text: React.FC<TextProps> = ({ content, color, size, disabled }) => {
  return <StyledText color={color} size={size} disabled={disabled}>{content}</StyledText>;
};