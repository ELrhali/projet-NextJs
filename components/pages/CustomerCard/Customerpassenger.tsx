import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import { useState } from 'react';
import ButtonPassenger from './ButtonPassenger';
import NewPassenger from './NewPassenger';

const useStyles = makeStyles({
  table: {
    
    minWidth : 650 ,
  },
  cell: {

  }
});

function createData(id: number, name: string, rfid: String, station: String , phone: String , defaults : number) {
  return { id, name, rfid, station, phone , defaults };
}

const rows = [
  createData( 1 , 'Passenger[Name]', 'Passenger[id]', 'Passenger[Phone Number]', 'Passenger[Station]' , 432),
  createData( 2 , 'Passenger[Name]', 'Passenger[id]', 'Passenger[Phone Number]', 'Passenger[Station]' , 432),
  createData( 3 , 'Passenger[Name]', 'Passenger[id]', 'Passenger[Phone Number]', 'Passenger[Station]' , 432),
  createData( 4 , 'Passenger[Name]', 'Passenger[id]', 'Passenger[Phone Number]', 'Passenger[Station]' , 432),
  createData( 5 , 'Passenger[Name]', 'Passenger[id]', 'Passenger[Phone Number]', 'Passenger[Station]' , 432),
 
  
];

export default function BasicTable() {
  const classes = useStyles();
  const [ postNum, setPostNum] = useState(5); // Default number of posts dislplayed
  function lessClick() {
    setPostNum(prevPostNum => prevPostNum -3)
};
  function handleClick() {
    setPostNum(prevPostNum => prevPostNum + 3) // 3 is the number of posts you want to load per click
  };
  const [open, setOpen] = React.useState(false);


  return (
    <TableContainer component={Paper}>
      <div className="py-5">
        <ButtonPassenger open={open} setOpen={setOpen} />
        <NewPassenger open={open} setOpen={setOpen} ></NewPassenger>
      </div>
      <Table className={classes.table} aria-label="simple table">
        <TableHead className="bg-gray-50">
          <TableRow  > 
          <TableCell   ></TableCell>
            <TableCell align="center"  >Name</TableCell>
            <TableCell align="center" >RFID ID</TableCell>
            <TableCell align="center" >Phone</TableCell>
            <TableCell align="center" >Station</TableCell>
            <TableCell align="center" >Defaults</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.slice(0,postNum).map((row) => (
            <TableRow key={row.name}>
              {/* <TableCell component="th" scope="row">
                {row.name}
              </TableCell> */}
              <TableCell >{row.id}</TableCell>
              <TableCell align="center" >{row.name}</TableCell>
              <TableCell align="center"  >{row.rfid}</TableCell>
              <TableCell align="center" >{row.station}</TableCell>
              <TableCell align="center" >{row.phone}</TableCell>
              <TableCell align="center" >{row.defaults}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex flex-row justify-between content-center items-center">
      <Button  color="primary" onClick={handleClick} >Show More</Button>
      <Button color="primary" onClick={lessClick}>Show Less</Button>
      </div>
    </TableContainer>
  );
}
