import { CirclePlus } from 'lucide-react';

interface CreateCourseProps {
  setShowForm: (isVisible: boolean) => void;
}

function CreateCourse({ setShowForm }: CreateCourseProps) {
  return (
    <div
      className="border-3 border-dashed text-center rounded-md hover:scale-101 duration-75 cursor-pointer p-15 bg-white shadow-md text-2xl font-bold text-gray-500"
      onClick={() => setShowForm(true)}
    >
      Create Course
      <span className="flex justify-center pt-2">
        <CirclePlus color="gray" size={'50px'} />
      </span>
    </div>
  );
}

export default CreateCourse;
