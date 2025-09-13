import { assignments } from '../../../../temp-data/temp-data.json';

async function Assignment({
  params,
}: {
  params: Promise<{ assignment: string }>;
}) {
  const { assignment } = await params;
  const selectedAssignment = assignments.find((a) => a.id === assignment);

  if (selectedAssignment) {
    return <div>{selectedAssignment.name}</div>;
  }
}

export default Assignment;
