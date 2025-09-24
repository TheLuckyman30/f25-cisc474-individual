'use client';
import CourseCard from './components/course-card';
import Dropdown from './components/dropdown';
import { courses } from '../../temp-data/temp-data.json';
import { useState } from 'react';

const POSSIBLE_ITEMS = ['Courses', 'Assignments'];

function Dashboard() {
  const [selectedInfo, setSelectedInfo] = useState<string>('Courses');

  return (
    <div className="flex justify-center items-center min-h-lvh pt-30">
      <div className="flex flex-col gap-10 w-fit max-w-[90%]">
        <div className="font-bold text-4xl md:text-7xl">{selectedInfo}</div>
        <Dropdown
          possibleItems={POSSIBLE_ITEMS}
          selectedItem={selectedInfo}
          setSelectedItem={setSelectedInfo}
        />
        <div className="flex flex-wrap gap-2">
          {courses.map((course, index) => (
            <CourseCard course={course} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
