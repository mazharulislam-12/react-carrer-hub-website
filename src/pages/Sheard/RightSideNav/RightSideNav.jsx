import React from 'react';
import { FaGoogle, FaGithub, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
    return (
        <div>

            <div className='p-4 space-y-3 mb-6'>
                <h2 className="text-3xl font-semibold ">Login With</h2>
                <button className='btn btn-outline w-full '>
                    <FaGoogle className='text-xl'></FaGoogle>
                    Login With Google
                </button>
                <button className='btn btn-outline w-full '>
                    <FaGithub className='text-xl'></FaGithub>
                    Login With GitHub
                </button>
            </div>


            <div className='p-4 space-y-3 mb-6'>
                <h2 className="text-xl font-semibold ">Find Us On</h2>
                <button className='btn btn-outline w-full'>
                    <FaFacebook className='text-xl'></FaFacebook>
                    Google
                </button>
                <button className='btn btn-outline w-full '>
                    <FaTwitter className='text-xl'></FaTwitter>
                    Twitter
                </button>
                <button className='btn btn-outline w-full '>
                    <FaInstagram className='text-xl'></FaInstagram>
                    Instagram
                </button>
            </div>

            {/* img */}

            <div className='bg-gray-100 rounded mt-6'>
                <div className='p-4 space-y-3 mb-6'>
                    <h2 className="text-xl font-semibold ">Q-Zone</h2>
                    <img src={qZone1} alt="" />
                </div>
                <div className='p-4 space-y-3 mb-6'>
                    <h2 className="text-xl font-semibold ">Q-Zone</h2>
                    <img src={qZone2} alt="" />
                </div>
                <div className='p-4 space-y-3 mb-6'>
                    <h2 className="text-xl font-semibold ">Q-Zone</h2>
                    <img src={qZone3} alt="" />
                </div>
            </div>


        {/* add */}

            <div>
                <div className='p-4 space-y-6 mb-6 bg-[#05001DCC] text-white text-center rounded-lg'>
                    <h2 className="text-4xl font-semibold ">Create an Amazing Newspaper</h2>
                    <h4 className='text-base'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</h4>
                    <button className='bg-[#D72050] text-white btn'>Learn More</button>
                </div>
            </div>



        </div>
    );
};

export default RightSideNav;