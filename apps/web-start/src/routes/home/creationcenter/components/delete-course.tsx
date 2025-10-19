import { CircleMinus } from 'lucide-react';

interface DelecteCourseButtonProps {
  newFormType: number;
  setFormType: (setNewFormType: number) => void;
}

function DeleteCourseButon({
  newFormType,
  setFormType,
}: DelecteCourseButtonProps) {
  return (
    <div
      className="border-3 border-dashed text-center rounded-md hover:scale-101 duration-75 cursor-pointer p-15 bg-white shadow-md text-2xl font-bold text-gray-500"
      onClick={() => setFormType(newFormType)}
    >
      Delete Course
      <span className="flex justify-center pt-2">
        <CircleMinus color="gray" size={'50px'} />
      </span>
    </div>
  );
}

export default DeleteCourseButon;
