import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import CreateCourse from './components/create-course';
import MutateForm from './components/mutate-form';

export const Route = createFileRoute('/home/creationcenter/')({
  component: CreationCenter,
});

function CreationCenter() {
  const [showForm, setShowForm] = useState<boolean>(false);
  return (
    <div className="flex justify-center pt-28 w-lvw">
      <div className="w-[50%]">
        <CreateCourse setShowForm={setShowForm} />
      </div>
      {showForm && <MutateForm setShowForm={setShowForm} />}
    </div>
  );
}
