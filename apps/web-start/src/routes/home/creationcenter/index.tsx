import { createFileRoute } from '@tanstack/react-router';
import { Fragment, useState } from 'react';
import CreateCourseButton from './components/create-course';
import CreateCourseForm from './components/create-form';
import DeleteCourseButon from './components/delete-course';
import DeleteCourseForm from './components/delete-form';

export const Route = createFileRoute('/home/creationcenter/')({
  component: CreationCenter,
});

function CreationCenter() {
  const noFormNum = -1;
  const [formType, setFormType] = useState<number>(noFormNum);
  const creationElements = [
    {
      Button: CreateCourseButton,
      Form: CreateCourseForm,
    },
    { Button: DeleteCourseButon, Form: DeleteCourseForm },
  ];

  return (
    <div className="flex flex-col justify-center items-center gap-15 pt-28 w-lvw">
      {creationElements.map(({ Button, Form }, index) => {
        return (
          <Fragment key={index}>
            <div className="w-[50%]">
              <Button newFormType={index} setFormType={setFormType} />
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
