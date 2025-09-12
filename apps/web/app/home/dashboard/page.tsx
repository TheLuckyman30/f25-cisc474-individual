import CourseCard from './components/course-card';
import { courses, assignments } from '../../temp-data/temp-data.json';

function Dashboard() {
  return (
    <div className="flex flex-col justify-center items-center h-lvh w-lvw">
      <div className="w-fit">
        <div className="flex justify-between mb-25">
          <div>Dropdown</div>
          <div>Dropdown</div>
        </div>
        <div className="grid grid-cols-5 gap-15">
          {courses.map((course, index) => (
            <CourseCard course={course} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
