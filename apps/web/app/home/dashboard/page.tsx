import { Suspense } from 'react';
import Dashboard from './components/dashboard';

async function getCourses() {
  return fetch(process.env.BACKEND_URL + '/courses').then((response) =>
    response.json(),
  );
}

async function getAssignments() {
  return fetch(process.env.BACKEND_URL + '/assignments').then((resposne) =>
    resposne.json(),
  );
}

function DashboardPage() {
  const courses = getCourses();
  const assignments = getAssignments();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Dashboard courses={courses} assignments={assignments} />
    </Suspense>
  );
}

export default DashboardPage;
