import { Link, useParams } from '@tanstack/react-router';

function CourseNavBar() {
  const { courseId } = useParams({ strict: false });

  const COURSE_NAV_LINKS = [
    { name: 'Dashboard', link: '/home/dashboard' },
    { name: 'Home', link: '/courses/$courseId/course-home' },
    { name: 'Assignments', link: '/courses/$courseId/assignments' },
    { name: 'Files', link: '/courses/$courseId/files' },
    { name: 'Media', link: '/courses/$courseId/media' },
    { name: 'Grades', link: '/courses/$courseId/grades' },
  ];

  return (
    <div className="flex justify-center">
      <div className="fixed flex gap-5 p-2 border border-blue-400 font-bold rounded-md">
        {COURSE_NAV_LINKS.map((link, index) => (
          <Link
            to={link.link}
            params={{ courseId: courseId }}
            key={index}
            className={`p-1 hover:-translate-y-1 duration-200 rounded-md [&.active]:bg-blue-300`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CourseNavBar;
