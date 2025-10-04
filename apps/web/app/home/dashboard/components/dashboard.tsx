'use client';
import { GetCourseDto } from '@repo/api/courses/dto/get-course.dto';
import { GetAssignmentDto } from '@repo/api/assignments/dto/get-assignment.dto';
import { use, useState } from 'react';
import Dropdown from './dropdown';
import CourseCard from './course-card';
import AssignmentCard from './assignment-card';

interface DashboardProps {
  courses: Promise<GetCourseDto[]>;
  assignments: Promise<GetAssignmentDto[]>;
}

const POSSIBLE_ITEMS = ['Courses', 'Assignments'];

function Dashboard({ courses, assignments }: DashboardProps) {
  const [selectedInfo, setSelectedInfo] = useState<string>('Courses');
  const allCourses = use(courses);
  const allAssignments = use(assignments);

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
            allCourses.map((course, index) => (
              <CourseCard course={course} key={index} />
            ))}
          {selectedInfo === 'Assignments' &&
            allAssignments.map((assingment, index) => {
              const course = allCourses.find(
                (c) => c.id === assingment.courseId,
              );
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
