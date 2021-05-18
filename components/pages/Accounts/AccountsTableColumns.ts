import { Column } from "react-table";
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
  {
    Header: "Subscription",
    accessor: "subscription",
  },
];
