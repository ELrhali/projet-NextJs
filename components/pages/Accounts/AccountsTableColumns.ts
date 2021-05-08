import { Column } from "react-table";

export const AccountTableColumns: Column<any>[] = [
  {
    Header: "Name",
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
