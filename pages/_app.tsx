import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Sidebar from "../components/layouts/sidebar";
import Header from "../components/layouts/Header";

function MyApp({ Component, pageProps }) {
  return (
    <div >
      <div  className=" flex  w-screen h-screen">
        <Sidebar />
        <div className="w-screen ">
          <Header />
          <div className="p-8">
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyApp;