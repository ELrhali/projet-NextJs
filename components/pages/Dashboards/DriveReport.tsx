import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useState } from 'react';
import { Button, Typography } from '@material-ui/core';


interface Data {
  
  rfidid :number,
   retard :number, 
   localion :string, 
    name :string,

}
function createData(rfidid :number, retard :number, localion :string,  name :string) {
  return { rfidid, retard, localion, name};
};

const rows = [
  createData( 31,50,'Mesnana','Hassan'),
  createData( 32,51,'Iberia','ayman'),
  createData( 33,31,'Meghogha','Mohamed'),
  createData( 34,61,'Meghogha','Rhali'),
  createData( 36,50,'Bni Makada','Rami'),
  


];

export default function BasicTable() {

  const [ postNum, setPostNum] = useState(3); // Default number of posts dislplayed
  function lessClick() {
    setPostNum(prevPostNum => prevPostNum -3)
};
  function handleClick() {
    setPostNum(prevPostNum => prevPostNum + 3) // 3 is the number of posts you want to load per click
  };


  return (
    <TableContainer component={Paper} >
    <div className="p-5"> 
        <Typography variant="h6"  color="textSecondary">
        Drivers Report
        </Typography>
    </div>
      <Table  aria-label="simple table " >
        <TableHead className="bg-gray-100 ">
          <TableRow> 
            <TableCell  align="center">RFID ID</TableCell>
        
            <TableCell  align="center">Retard</TableCell>
            <TableCell  align="center">LOCATION</TableCell>
            <TableCell  align="center">Name</TableCell>
          

          </TableRow>
        </TableHead>
        <TableBody>
        {rows.slice(0, postNum).map((row) => (
    
            <TableRow key={row.rfidid}>
                 <TableCell className="text-xs " align="center" >
                   {row.rfidid}
                   </TableCell>
              <TableCell align="center">
                {row.retard}
              </TableCell>
             
              <TableCell align="center">{row.localion}</TableCell>
              <TableCell align="center">{row.name}</TableCell>
             
              
             
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="mx-8 flex flex-row justify-between content-center items-center">
      <Button  color="primary" onClick={handleClick} >Show More</Button>
      <Button color="primary" onClick={lessClick}>Show Less</Button>
      </div>
    </TableContainer>
  );
}
