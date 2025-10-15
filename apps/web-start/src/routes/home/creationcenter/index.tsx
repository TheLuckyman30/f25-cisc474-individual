import { createFileRoute } from '@tanstack/react-router';
import CreateCourse from './components/create-course';

export const Route = createFileRoute('/home/creationcenter/')({
  component: CreationCenter,
});

function CreationCenter() {
  return (
    <div className="flex justify-center pt-28 w-lvw">
      <div className="w-[50%]">
        <CreateCourse />
      </div>
    </div>
  );
}
