import { createFileRoute } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { backendFetcher } from '../../../integrations/fetcher';
import CourseCard from './components/course-card';
import Dropdown from './components/dropdown';
import AssignmentCard from './components/assignment-card';
import type { Course } from '../../../interfaces/course';
import type { Assignment } from '../../../interfaces/assignment';

export const Route = createFileRoute('/home/dashboard/')({
  component: Dashboard,
});

const POSSIBLE_ITEMS = ['Courses', 'Assignments'];

function Dashboard() {
  const [selectedInfo, setSelectedInfo] = useState<string>('Courses');

  const courses = useQuery<Array<Course>>({
    queryKey: ['courses'],
    queryFn: backendFetcher('/courses'),
    initialData: [],
  });

  const assignments = useQuery<Array<Assignment>>({
    queryKey: ['assignments'],
    queryFn: backendFetcher('/assignments'),
    initialData: [],
  });

  if (courses.isFetching || assignments.isFetching) {
    return (
      <div className="flex justify-center w-lvw min-h-lvh pt-[50vh]">
        Loading Data...
      </div>
    );
  }

  return (
    <div className="flex justify-center w-lvw min-h-lvh pt-[28vh]">
      <div className="flex flex-col gap-10 w-[90%] 2xl:max-w-[60%]">
        <div className="font-bold text-4xl md:text-7xl">{selectedInfo}</div>
        <Dropdown
          possibleItems={POSSIBLE_ITEMS}
          selectedItem={selectedInfo}
          setSelectedItem={setSelectedInfo}
        />
        <div>
          <div className="font-bold">
            For Connecting Frontend to Backend Assignment:
          </div>
          <div>
            You can click on the Go To Assignments button to view all course
            assignments from the database. From there you can click on one of
            the assignment names to take you to that assignments individual
            page.
          </div>
          <br></br>
          <div className="font-bold">
            For Individual Frontend to Backend Assignment:
          </div>
          <div>[Put Instructions Here]</div>
        </div>
        <div className="flex flex-wrap gap-2 ">
          {selectedInfo === 'Courses' &&
            courses.data.map((course, index) => (
              <CourseCard course={course} key={index} />
            ))}
          {selectedInfo === 'Assignments' &&
            assignments.data.map((assingment, index) => {
              const course = courses.data.find(
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
