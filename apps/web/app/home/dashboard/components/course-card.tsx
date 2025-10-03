import Link from 'next/link';
import { GetCourseDto } from '@repo/api/courses/dto/get-course.dto';
import { MoveRight } from 'lucide-react';

interface CourseCardProps {
  course: GetCourseDto;
}

function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="flex flex-col justify-between rounded-md p-2 shadow-md bg-white border-b-blue-400 border-b-8 min-h-75 w-full lg:w-75 ">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 justify-between ">
          <div className="font-bold text-xl">{course.name}</div>
          <Link
            href={`/courses/${course.id}/course-home`}
            className="flex h-fit w-fit bg-blue-400 rounded-md p-1 hover:scale-110 duration-100"
          >
            <MoveRight color="white" />
          </Link>
        </div>
        <div>{course.description}</div>
      </div>
      <div className="flex w-full justify-center">
        <div className="flex bg-blue-400 hover:scale-105 duration-100 rounded-md text-white gap-2.5 font-bold p-1 cursor-pointer">
          <Link href={`/courses/${course.id}/assignments`}>
            Go to Assignments
          </Link>
          <MoveRight color="white" />
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
