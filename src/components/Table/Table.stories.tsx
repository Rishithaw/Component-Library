import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Table, TableHeader, TableRow, TableCell, TableFooter } from './Table';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Age</TableCell>
          <TableCell>Country</TableCell>
        </TableRow>
      </TableHeader>
      <tbody>
        <TableRow>
          <TableCell>Alice</TableCell>
          <TableCell>25</TableCell>
          <TableCell>Canada</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Bob</TableCell>
          <TableCell>30</TableCell>
          <TableCell>USA</TableCell>
        </TableRow>
      </tbody>
      <TableFooter>
        <TableRow>
          <TableCell>Total</TableCell>
          <TableCell colSpan={2}>2 Records</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
};
