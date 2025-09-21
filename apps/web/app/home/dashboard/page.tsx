'use client';
import CourseCard from './components/course-card';
import { courses } from '../../temp-data/temp-data.json';

function Dashboard() {
  return (
    <div className="flex justify-center items-center h-lvh w-lvw">
      <div className="grid grid-cols-5 gap-10">
        {courses.map((course, index) => (
          <CourseCard course={course} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
