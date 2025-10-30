import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Table, TableHeader, TableRow, TableCell } from './Table';

test('renders table with header and row', () => {
  render(
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell>Name</TableCell>
        </TableRow>
      </TableHeader>
      <tbody>
        <TableRow>
          <TableCell>Alice</TableCell>
        </TableRow>
      </tbody>
    </Table>,
  );

  expect(screen.getByText('Name')).toBeInTheDocument();
  expect(screen.getByText('Alice')).toBeInTheDocument();
});
