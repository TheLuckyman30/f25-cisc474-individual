'use client';
import Link from 'next/link';
import { GetAssignmentDto } from '@repo/api/assignments/dto/get-assignment.dto';
import { GetCourseDto } from '@repo/api/courses/dto/get-course.dto';
import { MoveRight } from 'lucide-react';

interface AssignmentCardProps {
  course: GetCourseDto;
  assignment: GetAssignmentDto;
}

function AssingmentCard({ assignment, course }: AssignmentCardProps) {
  return (
    <div className="flex flex-col justify-between rounded-md p-2 shadow-md bg-white border-b-blue-400 border-b-8 min-h-75 w-full md:w-75 ">
      <div className="flex flex-col gap-2">
        <div className="text-sm text-gray-500">{course.name}</div>
        <hr className="border-t-gray-300"></hr>
        <div className="flex gap-2 justify-between ">
          <div className="font-bold text-xl">{assignment.title}</div>
          <Link
            href={`/courses/${course.id}/assignments/${assignment.id}`}
            className="flex h-fit w-fit bg-blue-400 rounded-md p-1 hover:scale-110 duration-100"
          >
            <MoveRight color="white" />
          </Link>
        </div>
        <div>{assignment.description}</div>
      </div>
      <div className="flex w-full justify-center">
        <div className="flex bg-blue-400 hover:scale-105 duration-100 rounded-md text-white gap-2.5 font-bold p-1 cursor-pointer">
          <Link href={`/courses/${course.id}/course-home`}>Go to Course</Link>
          <MoveRight color="white" />
        </div>
      </div>
    </div>
  );
}

export default AssingmentCard;
