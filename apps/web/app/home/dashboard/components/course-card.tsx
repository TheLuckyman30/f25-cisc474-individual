import { Course } from '../../../temp-data/temp-interfaces';

interface CourseCardProps {
  course: Course;
}

function CourseCard({ course }: CourseCardProps) {
  return <div>{course.name}</div>;
}

export default CourseCard;
