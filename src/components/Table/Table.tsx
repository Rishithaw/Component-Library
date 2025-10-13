import React from 'react';
import styled from 'styled-components';
import { TableProps } from './Table.types';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';
import { TableCell } from './TableCell';
import { TableFooter } from './TableFooter';

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ddd;
`;

export const Table: React.FC<TableProps> = ({ children }) => {
  return <StyledTable>{children}</StyledTable>;
};

export { TableHeader, TableRow, TableCell, TableFooter };
