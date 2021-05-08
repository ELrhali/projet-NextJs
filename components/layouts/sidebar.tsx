import React from "react";
import { useRouter } from "next/router";
import ActiveLink from "./ActiveLink";
import { Dns, AccountTree, Dashboard, Loyalty, Work } from "@material-ui/icons";
const Sidebar = () => {
  const router = useRouter();
  return (
    <div className="md:w-3/12 w-6/12 h-screen shadow-2xl">
      <div className=" border-b py-3 mt-1 flex justify-around ">
   
       <p className="text-xl  font-semibold">CLOUDVISION</p>

      </div>
      <div className="p-4 space-y-14">
        <div className="space-y-4">
          <ActiveLink activeClassName="bg-gray-200" href="/">
            <div className="">
              <div
                className={
                  "flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer"
                }
              >
                <Dashboard className=" text-gray-600" />
                <p className=" ">Dashbord</p>
              </div>
            </div>
          </ActiveLink>

          <ActiveLink activeClassName="bg-gray-200" href="/accounts">
            <div className="">
              <div
                className={
                  "flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer"
                }
              >
                <AccountTree className=" text-gray-600" />
                <p className=" ">Accounts</p>
              </div>
            </div>
          </ActiveLink>
   

          <ActiveLink activeClassName="bg-gray-200" href="/offers">
            <div className="">
              <div
                className={
                  "flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer"
                }
              >
                <Work className=" text-gray-600" />
                <p className=" ">Offers</p>
              </div>
            </div>
          </ActiveLink>
        </div>
   
      </div>
    </div>
  );
};

export default Sidebar;
