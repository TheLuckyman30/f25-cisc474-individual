'use client';
import CourseCard from './components/course-card';
import { courses } from '../../temp-data/temp-data.json';

function Dashboard() {
  return (
    <div className="flex justify-center items-center min-h-lvh pt-30">
      <div className="flex flex-col gap-10 w-fit max-w-[90%]">
        <div className="font-bold text-4xl md:text-7xl">Courses</div>
        <div className="flex flex-wrap justify-center p-5 gap-5 bg-white rounded-md shadow-2xl">
          {courses.map((course, index) => (
            <CourseCard course={course} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
