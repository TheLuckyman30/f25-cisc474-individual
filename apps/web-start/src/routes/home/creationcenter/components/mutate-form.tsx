import { X } from 'lucide-react';
import { useState } from 'react';

interface MutateFormProps {
  setShowForm: (isVisible: boolean) => void;
}

function MutateForm({ setShowForm }: MutateFormProps) {
  const [newCourseName, setNewCourseName] = useState<string>('');
  const [newCourseDescription, setNewCourseDescritption] = useState<string>('');

  return (
    <div className="fixed flex justify-center items-center inset-0 w-lvw h-lvh bg-white/10 backdrop-blur-sm">
      <div className="flex flex-col items-center bg-white shadow-md p-5 rounded-lg w-[25%]">
        <span
          className="self-end text-red-500 cursor-pointer text-xl"
          onClick={() => setShowForm(false)}
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
                className="block border border-gray-300 p-2.5 bg-gray-50 rounded-lg text-sm w-full"
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
                className="block border border-gray-300 p-2.5 bg-gray-50 rounded-lg text-sm w-full"
                type="text"
                placeholder="Description"
                id="course_description"
                onChange={(e) => setNewCourseDescritption(e.target.value)}
              ></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MutateForm;
