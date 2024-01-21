import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../../../assets/1.png";
import img2 from "../../../assets/2.png";
import img3 from "../../../assets/3.png";
import { FaCalendar } from "react-icons/fa";

const LeftSideNav = () => {

    const [categories, setCategoris] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategoris(data))
    }, [])

    return (
        <div>
            <h2 className="text-2xl">All Caterogy: {categories.length} </h2>

                <h2 className="text-2xl font-semibold mx-6 border text-center rounded p-2 mb-8 bg-gray-300">National News</h2>

            {
                categories.map(category => <Link 
                    className="block ml-4 mb-4 text-xl "
                    key={category.id}>
                    {category.name}
                </Link>)
            }

            
            <div className=' rounded mt-6'>
                <div className='p-4 space-y-3 mb-6 bg-gray-100 rounded-md'>
                    <h2 className="text-xl font-semibold ">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                    <img src={img1} alt="" />
                    <div className="flex gap-5">
                        <p>Sports</p>
                        <p className="flex items-center gap-2"> <FaCalendar></FaCalendar> Jan 4 2022 </p>
                    </div>
                </div>
                <div className='p-4 space-y-3 mb-6 bg-gray-100 rounded-md'>
                    <h2 className="text-xl font-semibold ">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                    <img src={img2} alt="" />
                    <div className="flex gap-5">
                        <p>Sports</p>
                        <p className="flex items-center gap-2"> <FaCalendar></FaCalendar> Jan 4 2022 </p>
                    </div>
                </div>
                <div className='p-4 space-y-3 mb-6 bg-gray-100 rounded-md'>
                    <h2 className="text-xl font-semibold ">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                    <img src={img3} alt="" />
                    <div className="flex gap-5">
                        <p>Sports</p>
                        <p className="flex items-center gap-2"> <FaCalendar></FaCalendar> Jan 4 2022 </p>
                    </div>
                </div>
            </div>
            

        </div>
    );
};

export default LeftSideNav;