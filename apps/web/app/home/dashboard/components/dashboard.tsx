'use client';
import { GetCourseDto } from '@repo/api/courses/dto/get-course.dto';
import { GetAssignmentDto } from '@repo/api/assignments/dto/get-assignment.dto';
import { useState } from 'react';
import Dropdown from './dropdown';
import CourseCard from './course-card';
import AssignmentCard from './assignment-card';

interface DashboardProps {
  courses: GetCourseDto[];
  assignments: GetAssignmentDto[];
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
            assignments.map((assingment, index) => {
              const course = courses.find((c) => c.id === assingment.courseId);
              if (course) {
                return (
                  <AssignmentCard
                    key={index}
                    assignment={assingment}
                    course={course}
                  />
                );
              }
            })}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
