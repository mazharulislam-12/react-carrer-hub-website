import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex">
            <button className="btn bg-[#D72050] text-base text-white">Latest
            </button>
            <Marquee pauseOnHover={true} speed={70}>
                <Link to='/' className="mr-12">I can be a React component, multiple React components, or just some text.....</Link>
                <Link to='/' className="mr-12">I can be a React component, multiple React components, or just some text.....</Link>
                <Link to='/' className="mr-12">I can be a React component, multiple React components, or just some text.....</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;