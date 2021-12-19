import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button, TablePagination } from '@material-ui/core';
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(LOCATION: string, Card: number, Scheduled: string, Arrival: string, state: string, Name: string, Total: number) {
  return { LOCATION, Card, Scheduled, Arrival, state, Name, Total };
}

const rows = [

  createData('Mesnana', 351, '7:30', '7:30', 'At Time', 'Rami Ayman', 50),
  createData('Iberia', 3502, '7:39', '7:41', 'late', 'El Rhali Mohammed', 76),










];

export default function BasicTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  return (
    <TableContainer component={Paper}>
      <p className="m-5" >Report</p>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow className="bg-gray-300" >
            <TableCell>LOCATION</TableCell>
            <TableCell >Card N°</TableCell>
            <TableCell >Schedueld</TableCell>
            <TableCell >Arrival Time</TableCell>
            <TableCell >State</TableCell>
            <TableCell >Name</TableCell>
            <TableCell >Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <TableRow key={row.LOCATION}>
              <TableCell component="th" scope="row">
                {row.LOCATION}
              </TableCell>
              <TableCell >{row.Card}</TableCell>
              <TableCell >{row.Scheduled}</TableCell>
              <TableCell >{row.Arrival}</TableCell>
              <TableCell className="rounded-full py-10 px-1">{row.state}</TableCell>
              <TableCell >{row.Name}</TableCell>
              <TableCell >{row.Total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


  );
}
