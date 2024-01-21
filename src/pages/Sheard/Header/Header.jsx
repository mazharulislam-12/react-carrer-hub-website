import moment from "moment";
import logo from "../../../assets/logo.png";
const Header = () => {
    return (
        <div className="text-center ">
            <img className="mx-auto" src= {logo} alt="" />
            {/* <h2 className="text-5xl font-serif mt-2">The Dragon News </h2> */}
            <p className="text-base text-[#706F6F] my-5">Journalism Without Fear or Favour</p>
            <p className="text-xl text-[#403F3F]">{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
        </div>
    );
};

export default Header;