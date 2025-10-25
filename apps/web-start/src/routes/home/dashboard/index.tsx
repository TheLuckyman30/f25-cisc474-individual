import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useState } from 'react';
import { useApiQuery } from '../../../integrations/api';
import CourseCard from './components/course-card';
import Dropdown from './components/dropdown';
import AssignmentCard from './components/assignment-card';
import type { CourseOut } from '@repo/api/courses';
import type { Assignment } from '../../../interfaces/assignment';
import type { UserOut } from '@repo/api/users';

export const Route = createFileRoute('/home/dashboard/')({
  component: Dashboard,
});

const POSSIBLE_ITEMS = ['Courses', 'Assignments'];

function Dashboard() {
  const navigate = useNavigate();
  const [selectedInfo, setSelectedInfo] = useState<string>('Courses');
  const currentUser = useApiQuery<UserOut>(['users', 'me'], '/users/me');
  const courses = useApiQuery<Array<CourseOut>>(['courses'], '/courses');
  const assignments = useApiQuery<Array<Assignment>>(
    ['assignments'],
    '/assignments',
  );

  if (currentUser.isFetched && !currentUser.data?.firstName) {
    navigate({ to: '/create-user' });
  }

  const courseData = courses.data ?? [];
  const assignmentData = assignments.data ?? [];

  if (courses.error) {
    return (
      <div className="flex justify-center w-lvw min-h-lvh pt-[50vh]">
        {courses.error.message}
      </div>
    );
  }

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
          <div>
            Click on the Creation Center tab on the navbar. After
            adding/deleting/editing data, go back to the dashboard to see the
            changes
          </div>
        </div>
        <div className="flex flex-wrap gap-2 ">
          {selectedInfo === 'Courses' &&
            courseData.map((course, index) => (
              <CourseCard course={course} key={index} />
            ))}
          {selectedInfo === 'Assignments' &&
            assignmentData.map((assingment, index) => {
              const course = courseData.find(
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
