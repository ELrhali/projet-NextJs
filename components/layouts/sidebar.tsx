import React from "react";
import { useRouter } from "next/router";
import ActiveLink from "./ActiveLink";
import { Dns, AccountTree, Dashboard, Loyalty, Work } from "@material-ui/icons";
import HomeIcon from '@material-ui/icons/Home';
import DirectionsCarOutlinedIcon from '@material-ui/icons/DirectionsCarOutlined';
import CancelScheduleSendIcon from '@material-ui/icons/CancelScheduleSend';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import SettingsIcon from '@material-ui/icons/Settings';
const Sidebar = () => {
  const router = useRouter();
  
  return (
    <div  className="md:w-2/12 w-5/12 h-screen shadow-2xl 	 bg-gray-800 bg-opacity-85   ">
 
      <div className="   py-3 space-y-7 pt-4 flex h-16   justify-around  bg-gray-900 bg-opacity-60">
   
       <p className="text-2xl  text-gray-200 font-semibold italic ">M A J O R E L</p>

      </div>
      <div className="py-5 space-y-14">
        <div className="space-y-4">
        <ActiveLink activeClassName="bg-gray-900 border-l-2 border-fuchsia-600" href="#">
            <div className="">
              <div
                className={
                  "flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-900  hover  hover:text-blue-600  cursor-pointer"
                }
              >
                <HomeIcon  />
                <p className="text-white   	">Home</p>
              </div>
            </div>
          </ActiveLink>
          <ActiveLink activeClassName="bg-gray-900 border-l-8 border-fuchsia-600" href="/">
            <div className="">
              <div
                className={
                  "flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-900  hover:text-blue-600  cursor-pointer"
                }
              >
                <Dashboard  />
                <p className=" text-white">Dashboard</p>
              </div>
            </div>
          </ActiveLink>

          <ActiveLink activeClassName="bg-gray-900 border-l-8 border-fuchsia-600" href="/vehicule">
            <div className="text-white">
              <div
                className={
                  "flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-900 hover:text-blue-600  cursor-pointer"
                }
              >
                <DirectionsCarOutlinedIcon />
                <p className="text-white ">Vehicles</p>
              </div>
            </div>
          </ActiveLink>
          <ActiveLink activeClassName="bg-gray-900 border-l-8 border-fuchsia-600" href="/index2">
            <div className="text-white">
              <div
                className={
                  "flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-900 hover:text-blue-600  cursor-pointer"
                }
              >
                <CancelScheduleSendIcon />
                <p className="text-white ">Schedules</p>
              </div>
            </div>
          </ActiveLink>
          <ActiveLink activeClassName="bg-gray-900 border-l-8 border-fuchsia-600" href="/tableAc">
            <div className="">
              <div
                className={
                  "flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-900 hover:text-blue-600  cursor-pointer"
                }
              >
                <PlaylistAddCheckIcon />
                <p className="text-white ">Checklist</p>
              </div>
            </div>
          </ActiveLink>

          <ActiveLink activeClassName="bg-gray-900 border-l-8 border-fuchsia-600" href="/customer">
            <div className="">
              <div
                className={
                  "flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-900 hover:text-blue-600  cursor-pointer"
                }
              >
                <PermIdentityIcon className=" text-gray-200" />
                <p className=" text-white">Customers</p>
              </div>
            </div>
          </ActiveLink>
          <ActiveLink activeClassName="bg-gray-900 border-l-8 border-fuchsia-600" href="/accounts">
            <div className=" ">
              <div
                className={
                  "flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-900 hover:text-blue-600  cursor-pointer"
                }
              >
                <AccountTree className=" text-gray-200" />
                <p className="text-white ">Accounts</p>
              </div>
            </div>
          </ActiveLink>
        
          <ActiveLink activeClassName="bg-gray-900 border-l-8 border-fuchsia-600" href="#">
            <div className="">
              <div
                className={
                  "flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-900 hover:text-blue-600  cursor-pointer"
                }
              >
                <SettingsIcon className=" text-white" />
                <p className="text-white ">Settings</p>
              </div>
            </div>
          </ActiveLink>
        </div>
   
      </div></div>
 
  );
};

export default Sidebar;
