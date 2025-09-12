import CourseCard from './components/course-card';
import { courses, assignments } from '../../../../../temp-data/temp-data.json';

function Dashboard() {
  return (
    <div className="flex justify-center items-center h-lvh w-lvw">
      <CourseCard />
    </div>
  );
}

export default Dashboard;
