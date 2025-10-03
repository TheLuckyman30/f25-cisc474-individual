'use client';

import { useState } from 'react';
import { Assignment, Course } from '../../../temp-data/temp-interfaces';
import Dropdown from './dropdown';
import CourseCard from './course-card';
import AssignmentCard from './assignment-card';

interface DashboardProps {
  courses: Course[];
  assignments: Assignment[];
}

const POSSIBLE_ITEMS = ['Courses', 'Assignments'];

function Dashboard({ courses, assignments }: DashboardProps) {
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
