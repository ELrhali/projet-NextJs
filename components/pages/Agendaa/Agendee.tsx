import * as React from 'react';
import Paper from '@material-ui/core/Paper';

import Typography from '@material-ui/core/Typography';
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  MonthView,
  Appointments,
  Toolbar,
  WeekView,
  DayView ,
  DateNavigator,
  AppointmentTooltip,
  AppointmentForm,
  EditRecurrenceMenu,
  Resources,
  DragDropProvider,
  TodayButton,
  ViewSwitcher,
} from '@devexpress/dx-react-scheduler-material-ui';


import { owners } from './Tasks';
interface appoiProp{
  id : number ;
    title: string;
    priorityId: number ;
    startDate: Date ;
    endDate: Date;
    allDay: boolean ;
    rRule?: string ;
    exDate?: string ;
    ownerId: number ;
  
  }
const appointments = [
  {
    id: 0,
    title: 'Marjan -Mghogha',
    startDate: new Date(2021, 6, 20, 9, 30),
    endDate: new Date(2021, 6,20 , 11, 30),
    ownerId: 1,
    rRule: 'FREQ=WEEKLY;BYDAY=TU'
  }, {
    id: 1,
    title: 'Monthly Planning',
    startDate: new Date(2018, 5, 28, 9, 30),
    endDate: new Date(2018, 5, 28, 11, 30),
    ownerId: 1,
  }, {
    id: 2,
    title: 'Recruiting students',
    startDate: new Date(2018, 6, 9, 12, 0),
    endDate: new Date(2018, 6, 9, 13, 0),
    ownerId: 2,
  
  }, {
    id: 3,
    title: 'Oil Painting',
    startDate: new Date(2021,2, 18, 14, 30),
    endDate: new Date(2021,2, 19, 15, 30),
    ownerId: 2,
  }, {
    id: 4,
    title: 'Open Day',
    startDate: new Date(2021, 6, 20, 12, 0),
    endDate: new Date(2021, 6, 20, 13, 35),
    ownerId: 6,
  }, {
    id: 5,
    title: 'Watercolor Landscape',
    startDate: new Date(2021, 7, 8, 13, 0),
    endDate: new Date(2021, 7, 8, 14, 0),
    rRule: 'FREQ=DAILY;COUNT=5',
        exDate: '20180713T100000Z,20180727T100000Z',
    ownerId: 2,
  }, {
    id: 6,
    title: 'Meeting of Instructors',
    startDate: new Date(2021, 7, 28, 12, 0),
    endDate: new Date(2021, 7, 28, 12, 30),
    rRule: 'FREQ=WEEKLY;BYDAY=TH;UNTIL=20180727',
    exDate: '20180705T090000Z,20180719T090000Z',
    ownerId: 5,
  }, {
    id: 7,
    title: 'Oil Painting for Beginners',
    startDate: new Date(2021, 4, 3, 11, 0),
    endDate: new Date(2021, 4, 3, 12, 1),
    rRule: 'FREQ=WEEKLY;BYDAY=TU',
    exDate: '20180710T080000Z,20180724T080000Z',
    ownerId: 3,
  }, {
    id: 8,
    title: 'Watercolor Workshop',
    startDate: new Date(2021, 6, 9, 11, 11),
    endDate: new Date(2021, 6, 9, 12, 0),
    ownerId: 3,
  },
  {
    id: 8,
    title: 'Watercolor Workshop',
    startDate: new Date(2021 , 4, 9, 2, 11),
    endDate: new Date(2021, 4, 9, 3, 0),
    ownerId: 3,
  },
];

const resources = [{
  fieldName: 'ownerId',
  title: 'Owners',
  instances: owners,
}];

// const getBorder = (theme: Theme) => (`1px solid ${
//   theme.palette.type === 'light'
//     ? lighten(fade(theme.palette.divider, 1), 0.88)
//     : darken(fade(theme.palette.divider, 1), 0.68)
// }`);

const DayScaleCell = props => (
  <MonthView.DayScaleCell {...props} style={{ textAlign: 'center', fontWeight: 'bold' }} />
);

// const styles  =  makeStyles((theme: Theme) => 
// createStyles({
//   cell: {
//     color: '#78909C!important',
//     position: 'relative',
//     userSelect: 'none',
//     verticalAlign: 'top',
//     padding: 0,
//     height: 100,
//     borderLeft: getBorder(theme),
//     '&:first-child': {
//       borderLeft: 'none',
//     },
//     '&:last-child': {
//       paddingRight: 0,
//     },
//     'tr:last-child &': {
//       borderBottom: 'none',
//     },
//     '&:hover': {
//       backgroundColor: 'white',
//     },
//     '&:focus': {
//       backgroundColor: fade(theme.palette.primary.main, 0.15),
//       outline: 0,
//     },
//   },
//   content: {
//     display: 'flex',
//     justifyContent: 'center',
//     width: '80%',
//     height: '100%',
//     position: 'absolute',
//     alignItems: 'center',
//   },
//   text: {
//     padding: '0.5em',
//     textAlign: 'center',
//   },
//   sun: {
//     color: '#FFEE58',
//   },
//   cloud: {
//     color: '#90A4AE',
//   },
//   rain: {
//     color: '#4FC3F7',
//   },
//   sunBack: {
//     backgroundColor: '#FFFDE7',
//   },
//   cloudBack: {
//     backgroundColor: '#ECEFF1',
//   },
//   rainBack: {
//     backgroundColor: '#E1F5FE',
//   },
//   opacity: {
//     opacity: '0.5',
//   },
//   appointment: {
//     borderRadius: '10px',
//     '&:hover': {
//       opacity: 0.6,
//     },
//   },
//   apptContent: {
//     '&>div>div': {
//       whiteSpace: 'normal !important',
//       lineHeight: 1.2,
//     },
//   },
//   flexibleSpace: {
//     flex: 'none',
//   },
//   flexContainer: {
//     display: 'flex',
//     alignItems: 'center',
//   },
//   tooltipContent: {
//     padding: theme.spacing(3, 1),
//     paddingTop: 0,
//     backgroundColor: theme.palette.background.paper,
//     boxSizing: 'border-box',
//     width: '400px',
//   },
//   tooltipText: {
//     ...theme.typography.body2,
//     display: 'inline-block',
//   },
//   title: {
//     ...theme.typography.h6,
//     color: theme.palette.text.secondary,
//     fontWeight: theme.typography.fontWeightBold,
//     overflow: 'hidden',
//     textOverflow: 'ellipsis',
//     whiteSpace: 'nowrap',
//   },
//   icon: {
//     color: theme.palette.action.active,
//     verticalAlign: 'middle',
//   },
//   circle: {
//     width: theme.spacing(4.5),
//     height: theme.spacing(4.5),
//     verticalAlign: 'super',
//   },
//   textCenter: {
//     textAlign: 'center',
//   },
//   dateAndTitle: {
//     lineHeight: 1.1,
//   },
//   titleContainer: {
//     paddingBottom: theme.spacing(2),
//   },
//   container: {
//     paddingBottom: theme.spacing(1.5),
//   },
// }));

// const WeatherIcon = ({ classes, id }) => {
//   switch (id) {
//     case 0:
//       return <Opacity className={classes.rain} fontSize="large" />;
//     case 1:
//       return <WbSunny className={classes.sun} fontSize="large" />;
//     case 2:
//       return <FilterDrama className={classes.cloud} fontSize="large" />;
//     default:
//       return null;
//   }
// };

// #FOLD_BLOCK
// const CellBase = React.memo(({
//   classes,
//   startDate,
//   formatDate,
//   otherMonth ,
//   // #FOLD_BLOCK
// }) => {
//   const iconId = Math.abs(Math.floor(Math.sin(startDate.getDate()) * 10) % 3);
//   const isFirstMonthDay = startDate.getDate() === 1;
//   const formatOptions = isFirstMonthDay
//     ? { day: 'numeric', month: 'long' }
//     : { day: 'numeric' };
//     classes = styles();
//   return (
//     <TableCell
//       tabIndex={0}
//       className={classNames({
//         [classes.cell]: true,
//         [classes.rainBack]: iconId === 0,
//         [classes.sunBack]: iconId === 1,
//         [classes.cloudBack]: iconId === 2,
//         [classes.opacity]: otherMonth,
//       })}
//     >
//       <div className={classes.content}>
//         <WeatherIcon classes={classes} id={iconId} />
//       </div>
//       <div className={classes.text}>
//         {formatDate(startDate, formatOptions)}
//       </div>
//     </TableCell>
//   );
// });
//export interface CProps extends WithStyles<typeof styles> {}
// const TimeTableCell = withStyles(styles, { name: 'Cell' })(CellBase);

// const Appointment = withStyles(styles, { name: 'Appointment' })(({ classes, ...restProps }) => (
//   <Appointments.Appointment
//     {...restProps}
//     className={classes.appointment}
//   />
// ));

// const AppointmentContent = withStyles(styles , { name: 'AppointmentContent' })(({ classes, ...restProps }) => (
//   <Appointments.AppointmentContent {...restProps} className={classes.apptContent} />
// ));

// const FlexibleSpace = withStyles(styles, { name: 'ToolbarRoot' })(({ classes, ...restProps }) => (
//   <Toolbar.FlexibleSpace {...restProps} className={classes.flexibleSpace}>
//     <div className={classes.flexContainer}>
//       <ColorLens fontSize="large" htmlColor="#FF7043" />
      
//     </div>
//   </Toolbar.FlexibleSpace>
// ));
export  interface Propss {
  id?: number;
  title?: string;
  startDate?: Date;
  endDate?: Date;
  ownerId?: number;
  rRule?: Date;
  exDate?: Date;
 
  [date :string]: any ;
  

}

 class Agendee extends React.Component<Propss, any> {
   
  // #FOLD_BLOCK
  constructor(props:any ) {
    super(props );

    this.state = {
      data: appointments,
    };

    this.commitChanges = this.commitChanges.bind(this);
  }

  // #FOLD_BLOCK
  commitChanges({ added, changed, deleted }) {
    this.setState((state) => {
      let { data } = state;
      if (added) {
        const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
        data = [...data, { id: startingAddedId, ...added }];
      }
      if (changed) {
        data = data.map(appointment => (
          changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
      }
      if (deleted !== undefined) {
        data = data.filter(appointment => appointment.id !== deleted);
      }
      return { data };
    });
  }

  render() {
    const { data } = this.state;

    return (
      <Paper>
        <Scheduler
          data={data}
        >
          <EditingState
            onCommitChanges={this.commitChanges}
          />
          <ViewState
            defaultCurrentDate="2021-05-17"
          />
           <MonthView
            
            dayScaleCellComponent={DayScaleCell}
          />
 <WeekView
            startDayHour={11}
            endDayHour={19}
            dayScaleCellComponent={DayScaleCell}
          />
          <DayView
            dayScaleCellComponent={DayScaleCell}
            name="Day"
            intervalCount={1}
            startDayHour={7.5}
            endDayHour={17}

          />
           <DayView
            //dayScaleCellComponent={DayScaleCell}

            name="TwoDays"
            displayName="Two Days"
            intervalCount={2}

            startDayHour={7.5}
            endDayHour={16}

          />
         

          <Appointments
           
          />
          
          <Resources
            data={resources}
          />
         

          <Toolbar
           
          />
           <Typography>
          Calendar View
          </Typography>
          <ViewSwitcher />
          <DateNavigator />
         <TodayButton />
         <EditRecurrenceMenu />
          <AppointmentTooltip
            showCloseButton
            showDeleteButton
            showOpenButton
          />
          <AppointmentForm />
          <DragDropProvider />
        </Scheduler>
      </Paper>
    );
  }
}

export default Agendee ;