import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Avatar, Button, Icon, Typography } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { TextField } from '@material-ui/core';
import { useState } from 'react';


const Checkheader: React.FC = () => {
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(
        new Date('2014-08-18T21:11:54'),
      );
    
      const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
      };
    
    return(
        <div className="bg-white ">
        
        <Grid container spacing={2} className=" px-10 pb-10">
          <Grid item xs={11} className="relative " >
            <p className="absolute bottom-0 left-0 text-xl  text-gray-800">Check State 2</p>
          </Grid>
          <Grid item xs={1} className="relative ">
                 <IconButton className=" absolute bottom-0 right-0">
                   <EditIcon  />
                 </IconButton>
                 

          </Grid>
<Grid item xs={3}>
<TextField
 id="date"
 label="Date"
 type="date"
 defaultValue="2021-05-24"
 InputLabelProps={{
  shrink: true,}}
/>
</Grid>
<Grid item xs={3}>
<TextField
        id="time"
        label=" "
        type="time"
        defaultValue="07:30"
      
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
</Grid>
<Grid item xs={3}>

<TextField
//  fullWidth
//   autoFocus
    id="PhoneCustomer"
    multiline
    label="Vehicule N° "
    type="text"
/>
</Grid>
<Grid item xs={3} className=" place-content-center" >
<Button variant="contained" color="primary"  >
  Search
</Button>
</Grid>


<Grid item xs={2}>
<TextField
 fullWidth
  autoFocus
    id="From"
    multiline
    label="From :"
    type="text"
/>
</Grid>
<Grid item xs={2}>
<TextField
 fullWidth
  autoFocus
    id="To"
    multiline
    label="To :"
    type="text"
/>
</Grid>

<Grid item xs={3}>
<TextField
 fullWidth
  autoFocus
    id="PhoneCustomer"
    multiline
    label="Yazaki (company) "
    type="text"
/>
</Grid>

  </Grid>

           </div>
    );
};


export default Checkheader;