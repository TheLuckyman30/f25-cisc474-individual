import { createFileRoute } from '@tanstack/react-router';
import { Fragment, useState } from 'react';
import { CircleMinus, CirclePlus, Pencil } from 'lucide-react';
import CreateCourseForm from './components/create-form';
import DeleteCourseForm from './components/delete-form';

export const Route = createFileRoute('/home/creationcenter/')({
  component: CreationCenter,
});

function CreationCenter() {
  const noFormNum = -1;
  const [formType, setFormType] = useState<number>(noFormNum);
  const creationElements = [
    {
      text: 'Create Course',
      Form: CreateCourseForm,
      Icon: CirclePlus,
    },
    { text: 'Delete Course', Form: DeleteCourseForm, Icon: CircleMinus },
    { text: 'Edit Course', Form: CreateCourseForm, Icon: Pencil },
  ];

  return (
    <div className="flex flex-col justify-center items-center gap-15 pt-28 w-lvw">
      {creationElements.map(({ text, Form, Icon }, index) => {
        return (
          <Fragment key={index}>
            <div
              className="border-3 border-dashed text-center rounded-md hover:scale-101 duration-75 cursor-pointer p-15 bg-white shadow-md text-2xl font-bold text-gray-500 w-1/2"
              onClick={() => setFormType(index)}
            >
              {text}
              <span className="flex justify-center pt-2">
                <Icon color="gray" size={'50px'} />
              </span>
            </div>
            {formType === index && (
              <div className="fixed flex justify-center items-center inset-0 w-lvw h-lvh bg-white/10 backdrop-blur-sm">
                {<Form newFormType={noFormNum} setFormType={setFormType} />}
              </div>
            )}
          </Fragment>
        );
      })}
    </div>
  );
}
