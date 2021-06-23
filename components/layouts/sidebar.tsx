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
import EqualizerIcon from '@material-ui/icons/Equalizer';
const Sidebar = () => {
  const router = useRouter();
  
  return (
    <div  className="md:w-1/5 w-1/12 h-screen 	 bg-gray-800 bg-opacity-85   ">
 
      <div className="   py-3 space-y-7 pt-4 flex h-16   justify-around  bg-gray-900 bg-opacity-60">
   
       <p className="md:text-2xl  hidden md:flex  text-gray-200 font-semibold italic "> M A J O R E L</p>
     

      </div>
      <div className="py-3 space-y-10">
        <div className="space-y-3">
        <ActiveLink activeClassName="bg-gray-900 md:border-l-8 border-gray-500" href="/">
            <div className="">
              <div
                className={
                  "md:flex md:p-3 text-gray-700  md:space-x-4 0 hover:bg-gray-900  hover  hover:text-blue-600  cursor-pointer"
                }
              >
                <HomeIcon className="text-gray-400" />
                <p className="text-gray-100 hidden md:flex   	">Home</p>
              </div>
            </div>
          </ActiveLink>
          <ActiveLink activeClassName="bg-gray-900 md:border-l-8 border-gray-500" href="/dashboard">
            <div className="">
              <div
                className={
                  "md:flex md:p-3 text-gray-700  md:space-x-4 0 hover:bg-gray-900  hover:text-blue-600  cursor-pointer"
                }
              >
                <EqualizerIcon className="text-gray-400"  />
                <p className=" text-gray-100 hidden md:flex">Dashboard</p>
              </div>
            </div>
          </ActiveLink>

          <ActiveLink activeClassName="bg-gray-900 md:border-l-8 border-gray-500" href="/vehicule">
            <div className="">
              <div
                className={
                  "md:flex md:p-3 text-gray-700  md:space-x-4 0 hover:bg-gray-900 hover:text-blue-600  cursor-pointer"
                }
              >
                <DirectionsCarOutlinedIcon className="text-gray-400" />
                <p className="text-gray-100 hidden md:flex ">Vehicles</p>
              </div>
            </div>
          </ActiveLink>
          <ActiveLink activeClassName="bg-gray-900 md:border-l-8 border-gray-500" href="/agend">
            <div className="">
              <div
                className={
                  "md:flex md:p-3 text-gray-700  md:space-x-4 0 hover:bg-gray-900 hover:text-blue-600  cursor-pointer"
                }
              >
                <CancelScheduleSendIcon className="text-gray-400"  />
                <p className="text-gray-100  hidden md:flex">Schedules</p>
              </div>
            </div>
          </ActiveLink>
          <ActiveLink activeClassName="bg-gray-900 md:border-l-8 border-gray-500" href="/check">
            <div className="">
              <div
                className={
                  "md:flex md:p-3 text-gray-700  md:space-x-4 0 hover:bg-gray-900 hover:text-blue-600  cursor-pointer"
                }
              >
                <PlaylistAddCheckIcon className="text-gray-400"  />
                <p className="text-gray-100 hidden md:flex ">Checklist</p>
              </div>
            </div>
          </ActiveLink>

          <ActiveLink activeClassName="bg-gray-900 md:border-l-8 border-gray-500" href="/customer">
            <div className="">
              <div
                className={
                  "md:flex md:p-3 text-gray-700  md:space-x-4 0 hover:bg-gray-900 hover:text-blue-600  cursor-pointer"
                }
              >
                <PermIdentityIcon className=" text-gray-400" />
                <p className=" text-gray-100 hidden md:flex">Customers</p>
              </div>
            </div>
          </ActiveLink>
          <ActiveLink activeClassName="bg-gray-900 md:border-l-8 border-gray-500" href="/accounts">
            <div className=" ">
              <div
                className={
                  "md:flex md:p-3 text-gray-700  md:space-x-4 0 hover:bg-gray-900 hover:text-blue-600  cursor-pointer"
                }
              >
                <AccountTree className=" text-gray-400" />
                <p className="text-gray-100  hidden md:flex">Accounts</p>
              </div>
            </div>
          </ActiveLink>
        
      {    <ActiveLink activeClassName="bg-gray-900 md:border-l-8 border-fuchsia-600" href="/Stt">
            <div className="">
              <div
                className={
                  "md:flex md:p-3 text-gray-700  md:space-x-4 0 hover:bg-gray-900 hover:text-blue-600  cursor-pointer"
                }
              >
                <SettingsIcon className=" text-gray-400 " />
                <p className="text-gray-100 hidden md:flex">Settings</p>
              </div>
            </div>
          </ActiveLink>}
        </div>
   
      </div></div>
 
  );
};

export default Sidebar;
