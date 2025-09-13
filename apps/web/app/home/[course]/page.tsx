import { courses } from '../../temp-data/temp-data.json';

async function Course({ params }: { params: Promise<{ course: string }> }) {
  const { course } = await params;
  const selectedCourse = courses.find((c) => c.id === course);

  if (selectedCourse) {
    return <div>{selectedCourse.name}</div>;
  }
}

export default Course;
