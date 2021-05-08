import React, { useMemo } from "react";
import { useTable, Column } from "react-table";
import { AccountTableColumns } from "components/pages/Accounts/AccountsTableColumns";
import {
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

interface ApplicationTableProps {
  columns: Column<any>[];
  data: any[];
}
const ApplicationTable: React.FC<ApplicationTableProps> = ({
  data,
  columns,
}) => {
  const classes = useStyles();
  const COLUMNS = useMemo(() => columns, []);
  const DATA = useMemo(() => data, []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns: columns,
    data: data,
  });

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} {...getTableProps}>
        <TableHead>
          {headerGroups.map((headerGroup, headerGroupIndex) => (
            <TableRow
              key={headerGroupIndex}
              {...headerGroup.getFooterGroupProps()}
            >
              {headerGroup.headers.map((column, columnIndex) => (
                <TableCell
                  key={columnIndex}
                  align="center"
                  {...column.getHeaderProps}
                >
                  {column.render("Header")}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {rows.map((row, rowIndex) => {
            prepareRow(row);
            return (
              <TableRow key={rowIndex} {...row.getRowProps()}>
                {row.cells.map((cell, cellIndex) => (
                  <TableCell
                    key={cellIndex}
                    {...cell.getCellProps()}
                    align="center"
                  >
                    {cell.render("Cell")}
                  </TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ApplicationTable;
