import React from "react";
import { LinearProgress } from "@material-ui/core";
import ApplicationTable from "components/layouts/ApplicationTable";
import { AccountTableColumns } from "./AccountsTableColumns";
import { IAccount } from "../../../models/account.model";
const AccountsTable: React.FC = () => {
  // this is mock data for demonstration purposes
  const accounts: IAccount[] = [
    {
      appId: 'test',
      name: 'test',
      password: '**rrrr****',
      status: 'test',
      subscription: 'test',
      tenant: 'test',
    },
    {
      appId: 'test2',
      name: 'test2',
      password: '******',
      status: 'test2',
      subscription: 'test2',
      tenant: 'test2',
    },
    {
      appId: 'test3',
      name: 'test3',
      password: '******',
      status: 'test3',
      subscription: 'test3',
      tenant: 'test3',
    },
    {
      appId: 'test3',
      name: 'test3',
      password: '******',
      status: 'test3',
      subscription: 'test3',
      tenant: 'test3',
    },
    {
      appId: 'test3',
      name: 'test3',
      password: '******',
      status: 'test3',
      subscription: 'test3',
      tenant: 'test3',
    },
    {
      appId: 'test3',
      name: 'test3',
      password: '******',
      status: 'test3',
      subscription: 'test3',
      tenant: 'test3',
    },
    {
      appId: 'test3',
      name: 'test3',
      password: '******',
      status: 'test3',
      subscription: 'test3',
      tenant: 'test3',
    },
    {
      appId: 'test3',
      name: 'test3',
      password: '******',
      status: 'test3',
      subscription: 'test3',
      tenant: 'test3',
    },
    {
      appId: 'test3',
      name: 'test3',
      password: '******',
      status: 'test3',
      subscription: 'test3',
      tenant: 'test3',
    },
    {
      appId: 'test3',
      name: 'test3',
      password: '******',
      status: 'test3',
      subscription: 'test3',
      tenant: 'test3',
    },
    {
      appId: 'test3',
      name: 'test3',
      password: '******',
      status: 'test3',
      subscription: 'test3',
      tenant: 'test3',
    },
    {
      appId: 'test3',
      name: 'test3',
      password: '******',
      status: 'test3',
      subscription: 'test3',
      tenant: 'test3',
    }

  ]

  //if (loading) return <LinearProgress />;

  return (
    <>
      <ApplicationTable data={accounts} columns={AccountTableColumns} />
    </>
  );
};

export default AccountsTable;
