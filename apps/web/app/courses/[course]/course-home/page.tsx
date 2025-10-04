import CourseHome from './components/course-home';

async function getCourse(courseId: string) {
  return fetch(process.env.BACKEND_URL + `/courses/${courseId}`).then(
    (response) => response.json(),
  );
}

async function CoursePage({ params }: { params: Promise<{ course: string }> }) {
  const courseId = (await params).course;
  const course = getCourse(courseId);

  return <CourseHome course={course} />;
}

export default CoursePage;
