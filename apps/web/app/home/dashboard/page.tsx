'use client';
import CourseCard from './components/course-card';
import Dropdown from './components/dropdown';
import { courses } from '../../temp-data/temp-data.json';
import { assignments } from '../../temp-data/temp-data.json';
import { useState } from 'react';
import AssignmentCard from './components/assignment-card';

const POSSIBLE_ITEMS = ['Courses', 'Assignments'];

function Dashboard() {
  const [selectedInfo, setSelectedInfo] = useState<string>('Courses');

  return (
    <div className="flex justify-center w-lvw min-h-lvh pt-[28vh]">
      <div className="flex flex-col gap-10 w-[90%] 2xl:max-w-[60%]">
        <div className="font-bold text-4xl md:text-7xl">{selectedInfo}</div>
        <Dropdown
          possibleItems={POSSIBLE_ITEMS}
          selectedItem={selectedInfo}
          setSelectedItem={setSelectedInfo}
        />
        <div className="flex flex-wrap gap-2 ">
          {selectedInfo === 'Courses' &&
            courses.map((course, index) => (
              <CourseCard course={course} key={index} />
            ))}
          {selectedInfo === 'Assignments' &&
            assignments.map((assingment, index) => (
              <AssignmentCard key={index} assignment={assingment} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
