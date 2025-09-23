'use client';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface DropdownProps {
  selectedInfo: string;
  setSelectedInfo: (newInfo: string) => void;
}

const POSSIBLE_INFORMATION = ['Courses', 'Assignments'];

function Dropdown({ selectedInfo, setSelectedInfo }: DropdownProps) {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  function changeDropdown() {
    setDropdownOpen(!dropdownOpen);
  }

  function changeInfoShowed(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) {
    const newInfo = event.currentTarget.id;
    setSelectedInfo(newInfo);
  }

  return (
    <div className="relative select-none">
      <div
        className="flex justify-between gap-5 w-fit bg-white p-2 rounded-md shadow-md cursor-pointer"
        onClick={changeDropdown}
      >
        <div>{selectedInfo}</div>
        <ChevronDown />
      </div>
      <div
        className={`w-fit absolute flex-col bg-white p-2 rounded-md shadow-md top-[130%] duration-100
          ${dropdownOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        {POSSIBLE_INFORMATION.map((info) => (
          <div
            id={info}
            key={info}
            onClick={changeInfoShowed}
            className="hover:bg-gray-100 cursor-pointer rounded-md p-1"
          >
            {info}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dropdown;
