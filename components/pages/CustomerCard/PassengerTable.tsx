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
import TableSortLabel from '@material-ui/core/TableSortLabel';
import { IconButton } from '@material-ui/core';
import RoomIcon from '@material-ui/icons/Room';
import { Button } from '@material-ui/core';
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


function path1(){
return (
    <div className="inline-flex space-x-4">
    <label className="flex-1 ">From</label>
    <RoomIcon  fontSize="small"/>
    
   


<label className="flex-1 ">to</label>

    
    <RoomIcon  fontSize="small"/>

       
        
  </div>
)
};
function createData(path, StartAt, EndAt, Period, Distance,Passengers,Station,Actions ) {
  return { path, StartAt, EndAt, Period, Distance,Passengers,Station,Actions };
};
function buton(){
 return(
     <button 
    
    
     color="primary"
   >
     New Station</button>
 )
  
};
const rows = [
  createData(path1(),"7:15AM", "7:55 AM", "40 min", "9 Km",23,12,buton()),
  createData(path1(),"7:15AM", "7:55 AM", "40 min", "9 Km",23,12,buton()),

  createData(path1(),"7:15AM", "7:55 AM", "40 min", "9 Km",23,12,buton()),

  createData(path1(),"7:15AM", "7:55 AM", "40 min", "9 Km",23,12,buton()),

  createData(path1(),"7:15AM", "7:55 AM", "40 min", "9 Km",23,12,buton()),

  createData(path1(),"7:15AM", "7:55 AM", "40 min", "9 Km",23,12,buton()),

  createData(path1(),"7:15AM", "7:55 AM", "40 min", "9 Km",23,12,buton()),




];

export default function BasicTable() {
  const classes = useStyles();
  const [ postNum, setPostNum] = useState(4); // Default number of posts dislplayed
  function lessClick() {
    setPostNum(prevPostNum => prevPostNum -3)
};
  function handleClick() {
    setPostNum(prevPostNum => prevPostNum + 6) // 3 is the number of posts you want to load per click
  }

  return (
    <TableContainer component={Paper}>
      <Table className="w-screen" aria-label="simple table">
        <TableHead className="bg-gray-50">
          <TableRow> 
            <TableCell align="center"className="w-1/4">path</TableCell>
            <TableCell align="center">StartAt</TableCell>
            <TableCell align="center">EndAt</TableCell>
            <TableCell align="center">Period</TableCell>
            <TableCell align="center">Distance</TableCell>
            <TableCell align="center">Passengers</TableCell>
            <TableCell align="center">Station</TableCell>
            <TableCell align="center">Actions</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
        {rows.slice(0, postNum).map((row) => (
    
            <TableRow key={row.path}>
                 <TableCell align="center" className="w-1/4">
{row.path}
</TableCell>
              <TableCell align="center">
            
                {row.StartAt}
              </TableCell>
             
              <TableCell align="center">{row.EndAt}</TableCell>
              <TableCell align="center">{row.Period}</TableCell>
              <TableCell align="center">{row.Distance}</TableCell>
              <TableCell align="center">{row.Passengers}</TableCell>
              <TableCell align="center">{row.Station}</TableCell>
              <TableCell align="center">{row.Actions}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div align="center">
      <Button  color="primary" onClick={handleClick} >Show More</Button>
      <Button color="primary" onClick={lessClick}>Show Less</Button>
      </div>
    </TableContainer>
  );
}
