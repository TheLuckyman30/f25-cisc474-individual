import { useState } from 'react';
import { X } from 'lucide-react';
import { useApiMutation, useApiQuery } from '../../../../integrations/api';
import type { CourseOut, DeleteCourse } from '@repo/api/courses';

interface DeleteCourseFormProps {
  newFormType: number;
  setFormType: (newFormType: number) => void;
}

function DeleteCourseForm({ newFormType, setFormType }: DeleteCourseFormProps) {
  const [selectedCourseId, setSelectedCourseId] = useState<string>('');
  const courses = useApiQuery<Array<CourseOut>>(['courses'], '/courses');
  const mutation = useApiMutation<DeleteCourse, CourseOut>({
    endpoint: () => ({ path: '/courses', method: 'DELETE' }),
  });

  if (courses.isFetching) {
    return <div>Loading...</div>;
  }

  const coursesData = courses.data ?? [];

  return (
    <div className="flex flex-col items-center bg-white shadow-md p-5 rounded-lg w-[15%]">
      <span
        className="self-end text-red-500 cursor-pointer text-xl"
        onClick={() => setFormType(newFormType)}
      >
        <X />
      </span>
      <form className="w-full" onSubmit={(event) => event.preventDefault()}>
        <div className="flex flex-col gap-6">
          <div>
            <label
              htmlFor="course-delete"
              className="block mb-2 font-medium text-sm text-gray-900"
            >
              Select a Course to Delete
            </label>
            <select
              id="course-delete"
              onChange={(event) =>
                setSelectedCourseId(event.currentTarget.value)
              }
              className="block border border-gray-300 p-2.5 bg-gray-50 rounded-lg text-sm w-full focus:outline-none"
            >
              {coursesData.map((course, index) => (
                <option key={index} value={course.id}>
                  {course.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex gap-2.5 items-center">
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
            {mutation.isPending && <div>Loading...</div>}
            {mutation.isError && (
              <div>There was an error: {mutation.error.message}</div>
            )}
            {mutation.isSuccess && <div>Course Deleted!</div>}
          </div>
        </div>
      </form>
    </div>
  );
}

export default DeleteCourseForm;
