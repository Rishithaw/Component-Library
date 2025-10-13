import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.thead`
  background-color: #f4f4f4;
  font-weight: bold;
`;

export const TableHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};
