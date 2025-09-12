import { Course } from '../../../temp-data/temp-interfaces';

interface CourseCardProps {
  course: Course;
}

function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="min-h-100 border border-red-400 p-5 rounded-md shadow-2xl hover:-translate-y-5 duration-200">
      <div>{course.name}</div>
    </div>
  );
}

export default CourseCard;
