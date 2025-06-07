import React from 'react';
import { FaHome, FaBuilding, FaBox, FaUsers, FaPuzzlePiece, FaCogs, FaFolder, FaCalendarAlt } from 'react-icons/fa';

const navItems = [
  { icon: <FaHome />, label: 'Home' },
  { icon: <FaBox />, label: 'Products' },
  { icon: <FaCogs />, label: 'Services' },
];

const Leftbar = () => {
  return (
    <div className="fixed top-[9%] left-0 w-44 h-screen border-r-2  p-4 z-10">
      <div className="space-y-2 ">
        {navItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-6 px-3 py-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md cursor-pointer transition-colors"
          >
            <div className="text-lg">{item.icon}</div>
            <span className="text-sm  font-bold ">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leftbar;