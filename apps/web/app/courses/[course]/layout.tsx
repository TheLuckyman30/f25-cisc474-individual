import CourseNavBar from './components/course-navbar';

function HomeLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <CourseNavBar />
      <div>{children}</div>
    </>
  );
}

export default HomeLayout;
