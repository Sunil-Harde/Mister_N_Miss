import React from "react";
import mainLogo from "../../../public/golden.png";
import { FaHome, FaMapMarkerAlt } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { RiCustomerServiceFill } from "react-icons/ri";

function Nav() {
    return (
        <div>
            <div>
                <img
                    src={mainLogo}
                    className="border border-dashed border-amber-50 w-25 m-5"
                />
            </div>
            <div>
                <ul className="border rounded-2xl border-black-900 h-70 w-12 m-10 flex flex-col justify-center items-center gap-10 text-2xl font-bold text-white">
                    <li className="hover:bg-[#ffffff] hover:text-black p-1.5 rounded-4xl cursor-pointer">
                        <FaHome />
                    </li>
                    <li className="hover:bg-[#ffffff] hover:text-black p-1.5 rounded-4xl cursor-pointer">
                        <IoMdContact />
                    </li>
                    <li className="hover:bg-[#ffffff] hover:text-black p-1.5 rounded-4xl cursor-pointer">
                        <RiCustomerServiceFill />
                    </li>
                    <li className="hover:bg-[#ffffff] hover:text-black p-1.5 rounded-4xl cursor-pointer">
                        <FaMapMarkerAlt />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Nav;
