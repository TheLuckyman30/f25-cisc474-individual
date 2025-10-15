import { CirclePlus } from 'lucide-react';

function CreateCourse() {
  return (
    <div className="border-2 border-dashed text-center rounded-md hover:scale-102 duration-75 cursor-pointer p-15 bg-white shadow-md text-2xl font-bold text-gray-500">
      Create Course
      <span className="flex justify-center pt-2">
        <CirclePlus color="gray" size={'50px'} />
      </span>
    </div>
  );
}

export default CreateCourse;
