import { courses } from '../../../temp-data/temp-data.json';

async function Course({ params }: { params: Promise<{ course: string }> }) {
  const { course } = await params;
  const selectedCourse = courses.find((c) => c.id === course);

  if (selectedCourse) {
    return (
      <div className="mt-30 ml-30">
        <div className="font-bold text-3xl">{selectedCourse.name}</div>
        <div className="text-2xl">Description</div>
        <div>{selectedCourse.description}</div>
      </div>
    );
  }
}

export default Course;
