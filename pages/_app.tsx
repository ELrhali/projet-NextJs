import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Sidebar from "../components/layouts/sidebar";
import Header from "../components/layouts/Header";

function MyApp({ Component, pageProps }) {
  return (
    <div  className="  h-screen " >
      <div  className=" flex  w-screen h-screen">
        <Sidebar />
        <div className="w-screen overflow-y-scroll ">
          <Header />
          <div className="p-8 bg-gray-100 ">
            <Component {...pageProps} />
          </div>
       
        </div>
      </div>
     
    </div>
  );
}

export default MyApp;