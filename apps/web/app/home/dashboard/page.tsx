'use client';

import CourseCard from './components/course-card';
import { courses } from '../../temp-data/temp-data.json';
import Link from 'next/link';

function Dashboard() {
  return (
    <div className="flex justify-center items-center h-lvh w-lvw">
      <Link
        href="/"
        className="absolute top-0 left-0 m-5 p-1 border rounded-md hover:-translate-y-2 duration-200"
      >
        Welcome Page
      </Link>
      <div className="grid grid-cols-5 gap-10">
        {courses.map((course, index) => (
          <CourseCard course={course} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
