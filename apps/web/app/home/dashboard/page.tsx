import CourseCard from './components/course-card';
import { courses, assignments } from '../../temp-data/temp-data.json';

function Dashboard() {
  return (
    <div className="flex justify-center items-center h-lvh w-lvw">
      <div className="flex gap-15">
        {courses.map((course, index) => (
          <CourseCard course={course} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
