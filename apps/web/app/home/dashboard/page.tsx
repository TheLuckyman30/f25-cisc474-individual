import Dashboard from './components/dashboard';

async function getCourses() {
  return fetch(process.env.BACKEND_URL + '/courses', {
    cache: 'no-store',
  }).then((response) => response.json());
}

async function getAssignments() {
  return fetch(process.env.BACKEND_URL + '/assignments').then((resposne) =>
    resposne.json(),
  );
}

async function DashboardPage() {
  const courses = getCourses();
  const assignments = getAssignments();

  return <Dashboard courses={courses} assignments={assignments} />;
}

export default DashboardPage;
