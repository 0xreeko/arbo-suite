import "./index.css";
import UserWidget from "./components/UserWidget";
import { etherIcon, settingsIcon, maticIcon } from "./components/Icons";
// import polygonIcon from "./img/polygon-matic-logo.svg";

function App() {
  return (
    <div className="font-medium flex w-full h-screen bg-gradient-to-tr from-[#060508] to-[#1a1a1c]">
      <main className="flex flex-col flex-grow">
        <div className="header h-12 border-b">
          <div className=" flex items-center justify-between w-full h-full p-6 text-white">
            <p className="">
              ArboSuite{" "}
              <span className="text-[12px] text-gray-600">
                Advanced Trading Dashboard
              </span>
            </p>
            <div className="flex items-center space-x-3">
              <span className="fill-indigo-500 w-5 h-5 transition transform hover:scale-110">
                {" "}
                {maticIcon}
              </span>
              <span className="text-sky-500 transition transform hover:scale-110">
                {etherIcon}
              </span>
              <span className="text-rose-500 transition transform hover:scale-110">
                {settingsIcon}
              </span>
              <button className="font-medium text-amber-500 border-amber-500 hover:bg-amber-500 hover:text-[#060508] border-2 py-1 px-3 rounded-md transition">
                Connect
              </button>
            </div>
          </div>
        </div>
        <div className="main px-6 py-6 grid grid-cols-12 gap-6 w-full h-full">
          <div className="bg-[#1f1f23] w-full rounded">
            <p className="text-red-500">hey</p>
            <p className="text-rose-500">hey</p>
            <p className="text-indigo-500">hey</p>
            <p className="text-sky-500">hey</p>
            <p className="text-teal-500">hey</p>
            <p className="text-amber-500">hey</p>
            <p className="text-green-500">hey</p>
          </div>
          <div className="bg-white h-12 w-12"></div>
          <div className="bg-white w-12 h-12"></div>
          <div className="bg-white w-12 h-12"></div>
          <div className="bg-white w-12 h-12"></div>
          <div className="bg-white w-12 h-12"></div>
          <div className="bg-white w-12 h-12"></div>
          <div className="bg-white w-12 h-12"></div>
          <div className="bg-white w-12 h-12"></div>
          <UserWidget />
        </div>
      </main>
    </div>
  );
}

export default App;
