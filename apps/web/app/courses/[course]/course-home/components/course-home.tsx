import { GetCourseDto } from '@repo/api/courses/dto/get-course.dto';
import { use } from 'react';

interface CourseHomeProps {
  course: Promise<GetCourseDto>;
}

function CourseHome({ course }: CourseHomeProps) {
  const userCourse = use(course);
  return (
    <div className="mt-30 ml-30">
      <div className="font-bold text-3xl">{userCourse.name}</div>
      <div className="text-2xl">Description</div>
      <div>{userCourse.description}</div>
    </div>
  );
}

export default CourseHome;
