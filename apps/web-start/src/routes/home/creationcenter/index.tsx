import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/home/creationcenter/')({
  component: CreationCenter,
});

function CreationCenter() {
  return <div className="pt-28"></div>;
}
