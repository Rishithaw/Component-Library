import React from 'react';
import styled from 'styled-components';

export interface TableCellProps {
  children: React.ReactNode;
  colSpan?: number;
}

const StyledTableCell = styled.td`
  padding: 8px;
  border: 1px solid #ccc;
`;

export const TableCell: React.FC<TableCellProps> = ({ children, colSpan }) => {
  return <StyledTableCell colSpan={colSpan}>{children}</StyledTableCell>;
};
