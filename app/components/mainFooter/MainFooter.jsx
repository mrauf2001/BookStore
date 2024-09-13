import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faLink,
  faLayerGroup,
  faDollarSign,
  faNewspaper,
  faEnvelope,
  faPhone,
  faComments,
} from "@fortawesome/free-solid-svg-icons";

const MainFooter = () => {
  return (
    <footer className="bg-black text-white p-8 flex-col ">
      <div className=" container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h2 className="text-[30px] font-bold text-center">Whimsical What's It Press</h2>
        </div>

        <div>
          <h2 className="text-lg font-bold flex items-center">
            <FontAwesomeIcon icon={faLink} className="w-6 h-6 md:w-8 md:h-8 mr-2" /> Quick
            Links
          </h2>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center">
              <FontAwesomeIcon icon={faHome} className="w-6 h-6 md:w-8 md:h-8 mr-2" /> Home
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faLayerGroup} className="w-6 h-6 md:w-8 md:h-8 mr-2" />{" "}
              Categories
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faDollarSign} className="w-6 h-6 md:w-8 md:h-8 mr-2" />{" "}
              Best Seller
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faNewspaper} className="w-6 h-6 md:w-8 md:h-8 mr-2" />{" "}
              New Release
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold flex items-center">
            <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6 md:w-8 md:h-8 mr-2" />{" "}
            Contact Us
          </h2>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center text-blue-700">
              <FontAwesomeIcon icon={faComments} className="w-6 h-6 md:w-8 md:h-8 mr-2" />{" "}
              Email: Info@WwiPress.com
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center border-t border-gray-800 pt-4">
        <p className="text-sm text-blue-700">
          © 2024 Whimsical What's It Press. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default MainFooter;
