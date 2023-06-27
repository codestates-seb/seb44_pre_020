import { Link } from "react-router-dom";
import StackoverFlowLogo from "../../assets/logo.png";
import LoginButton from "./LoginButton";
import Search from "./Search";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="flex sticky z-10 w-screen bg-[#F8F8F8] h-[56px] top-0 left-0 border-solid border-t-[3px] border-[#ef8236] shadow-md text-[13px] text-nav-color font-normal">
      <div className="flex items-center justify-center w-[1265px] h-[52.8px] max-w-[1265px] mx-auto">
        <Link to="/">
          <div className="h-[100%] flex items-center px-[8px] hover:bg-[#E1E3E5]">
            <img className="min-w-[164px] w-[150px] h-[30px]  text-white" src={StackoverFlowLogo} alt="Stack Overflow Logo" />
          </div>
        </Link>
        {/* <ol className="flex w-[234px] gap-[4px] p-[2px}">
          <li type="button" className="p-2 hover:bg-[#E1E3E5] border-none rounded-[20px] focus:outline-none">
            About
          </li>
          <li type="button" className="p-2 hover:bg-[#E1E3E5] border-none rounded-[20px] focus:outline-none">
            Products
          </li>
          <li type="button" className="p-2 hover:bg-[#E1E3E5] border-none rounded-[20px] focus:outline-none">
            For Team
          </li>
        </ol> */}
        <Nav />
        <Search />
        <LoginButton />
      </div>
    </header>
  );
};

export default Header;
