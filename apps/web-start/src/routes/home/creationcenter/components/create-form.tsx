import { useMutation } from '@tanstack/react-query';
import { X } from 'lucide-react';
import { useState } from 'react';
import { mutateBackend } from '../../../../integrations/fetcher';
import type { CourseOut, CreateCourse } from '@repo/api/courses';

interface CreateFormProps {
  newFormType: number;
  setFormType: (newFormType: number) => void;
}

function CreateCourseForm({ newFormType, setFormType }: CreateFormProps) {
  const [newCourseName, setNewCourseName] = useState<string>('');
  const [newCourseDescription, setNewCourseDescritption] = useState<string>('');

  const mutation = useMutation({
    mutationFn: (newCourse: CreateCourse) => {
      return mutateBackend<CreateCourse, CourseOut>(
        '/courses',
        'POST',
        newCourse,
      );
    },
  });

  return (
    <div className="flex flex-col items-center bg-white shadow-md p-5 rounded-lg w-[25%]">
      <span
        className="self-end text-red-500 cursor-pointer text-xl"
        onClick={() => setFormType(newFormType)}
      >
        <X />
      </span>
      <form className="w-full">
        <div className="flex flex-col gap-6">
          <div>
            <label
              htmlFor="course_name"
              className="block mb-2 font-medium text-sm text-gray-900"
            >
              Course Name
            </label>
            <input
              className="block border border-gray-300 p-2.5 bg-gray-50 rounded-lg text-sm w-full focus:outline-blue-400"
              type="text"
              placeholder="Name"
              id="course_name"
              onChange={(e) => setNewCourseName(e.target.value)}
            ></input>
          </div>
          <div>
            <label
              htmlFor="course_description"
              className="block mb-2 font-medium text-sm text-gray-900"
            >
              Course Description
            </label>
            <input
              className="block border border-gray-300 p-2.5 bg-gray-50 rounded-lg text-sm w-full focus:outline-blue-400"
              type="text"
              placeholder="Description"
              id="course_description"
              onChange={(e) => setNewCourseDescritption(e.target.value)}
            ></input>
          </div>

          <button
            className="bg-blue-400 w-fit text-white font-medium p-2.5 rounded-lg hover:scale-102 duration-75 cursor-pointer"
            onClick={() => {
              mutation.mutate({
                ownerId: 'user1',
                name: newCourseName,
                description: newCourseDescription,
              });
            }}
          >
            Submitt
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateCourseForm;
