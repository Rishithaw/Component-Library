import React from 'react';
import styled from 'styled-components';

const StyledRow = styled.tr`
  border-bottom: 1px solid #ddd;

  &:hover {
    background-color: #f9f9f9;
  }
`;

export const TableRow: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <StyledRow>{children}</StyledRow>;
};
