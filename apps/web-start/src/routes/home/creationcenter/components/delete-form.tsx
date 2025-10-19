import { useMutation, useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { X } from 'lucide-react';
import {
  backendFetcher,
  mutateBackend,
} from '../../../../integrations/fetcher';
import type { CourseOut, DeleteCourse } from '@repo/api/courses';

interface DeleteCourseFormProps {
  newFormType: number;
  setFormType: (newFormType: number) => void;
}

function DeleteCourseForm({ newFormType, setFormType }: DeleteCourseFormProps) {
  const [selectedCourseId, setSelectedCourseId] = useState<string>('');
  const courses = useQuery<Array<CourseOut>>({
    queryKey: ['courses'],
    queryFn: backendFetcher<Array<CourseOut>>('/courses'),
    initialData: [],
  });
  const mutation = useMutation({
    mutationFn: (courseToDelete: DeleteCourse) => {
      return mutateBackend<DeleteCourse, CourseOut>(
        '/courses',
        'DELETE',
        courseToDelete,
      );
    },
  });

  if (courses.isFetching) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center bg-white shadow-md p-5 rounded-lg w-[15%]">
      <span
        className="self-end text-red-500 cursor-pointer text-xl"
        onClick={() => setFormType(newFormType)}
      >
        <X />
      </span>
      <form className="flex flex-col select-none">
        <label className="font-bold">Select a Course to Delete</label>
        <select
          onChange={(event) => setSelectedCourseId(event.currentTarget.value)}
          className="bg-white shadow-md rounded-md w-fit p-2 border border-gray-400 focus:outline-none "
        >
          {courses.data.map((course, index) => (
            <option key={index} value={course.id}>
              {course.name}
            </option>
          ))}
        </select>
      </form>
      <button
        className="bg-blue-400 w-fit text-white font-medium p-2.5 rounded-lg hover:scale-102 duration-75 cursor-pointer"
        onClick={() => {
          mutation.mutate({
            id: selectedCourseId,
          });
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default DeleteCourseForm;
