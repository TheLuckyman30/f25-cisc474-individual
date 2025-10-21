import { useMutation, useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { X } from 'lucide-react';
import {
  backendFetcher,
  mutateBackend,
} from '../../../../integrations/fetcher';
import type { CourseOut, EditCourse } from '@repo/api/courses';

interface EditCourseFormProps {
  newFormType: number;
  setFormType: (newFormType: number) => void;
}

function EditCourseForm({ newFormType, setFormType }: EditCourseFormProps) {
  const [newCourseName, setNewCourseName] = useState<string>('');
  const [newCourseDescription, setNewCourseDescritption] = useState<string>('');
  const [selectedCourse, setSelectedCourse] = useState<CourseOut>();

  const courses = useQuery<Array<CourseOut>>({
    queryKey: ['courses'],
    queryFn: backendFetcher<Array<CourseOut>>('/courses'),
    initialData: [],
  });
  const mutation = useMutation({
    mutationFn: (courseToDelete: EditCourse) => {
      return mutateBackend<EditCourse, CourseOut>(
        '/courses',
        'PUT',
        courseToDelete,
      );
    },
  });

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const course = JSON.parse(event.currentTarget.value) as CourseOut;
    setSelectedCourse(course);
    setNewCourseName(course.name);
    setNewCourseDescritption(course.description);
  }

  if (courses.isFetching) {
    return <div>Loading...</div>;
  }

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
              htmlFor="course-edit"
              className="block mb-2 font-medium text-sm text-gray-900"
            >
              Select a Course to Edit
            </label>
            <select
              id="course-edit"
              onChange={(event) => handleChange(event)}
              defaultValue="initial"
              className="block border border-gray-300 p-2.5 bg-gray-50 rounded-lg text-sm w-full focus:outline-none"
            >
              <option value="initial" hidden disabled>
                Select an Option
              </option>
              {courses.data.map((course, index) => (
                <option key={index} value={JSON.stringify(course)}>
                  {course.name}
                </option>
              ))}
            </select>
          </div>
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
              value={newCourseName}
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
              value={newCourseDescription}
              onChange={(e) => setNewCourseDescritption(e.target.value)}
            ></input>
          </div>
          <button
            className="bg-blue-400 w-fit text-white font-medium p-2.5 rounded-lg hover:scale-102 duration-75 cursor-pointer"
            onClick={() => {
              mutation.mutate({
                id: selectedCourse ? selectedCourse.id : '',
                ownerId: 'user1',
                name: newCourseName,
                description: newCourseDescription,
              });
            }}
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditCourseForm;
