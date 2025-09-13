import { assignments } from '../../../../temp-data/temp-data.json';

async function Assignment({
  params,
}: {
  params: Promise<{ assignment: string }>;
}) {
  const { assignment } = await params;
  const selectedAssignment = assignments.find((a) => a.id === assignment);

  if (selectedAssignment) {
    return (
      <div className="mt-30 ml-30">
        <div className="font-bold text-3xl">{selectedAssignment.name}</div>
        <div className="text-2xl flex gap-5">
          <div>{`Due Date: ${selectedAssignment.dueDate}`}</div>
          <div>Submission Type: PDF</div>
        </div>
        <div className="text-2xl">Content</div>
        <div>{selectedAssignment.description}</div>
      </div>
    );
  }
}

export default Assignment;
