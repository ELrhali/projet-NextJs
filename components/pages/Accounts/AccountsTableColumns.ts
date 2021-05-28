import { Column } from "react-table";
import Button from '@material-ui/core/Button';
//head de table 
export const AccountTableColumns: Column<any>[] = [
  {
    Header: "Namssse",
    accessor: "name",
  },
  {
    Header: "Application ID",
    accessor: "appId",
  },
  {
    Header: "Tenant",
    accessor: "tenant",
  },
  {
    Header: "Password",
    accessor: "password",
  },
     /* {
      Header: "Actions",
      Cell: ({ row }) => <Button variant="contained">Default</Button> ,
    },*/
  
];
