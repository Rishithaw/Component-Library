import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.tfoot`
  background-color: #f4f4f4;
  font-weight: bold;
`;

export const TableFooter: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <StyledFooter>{children}</StyledFooter>;
};
