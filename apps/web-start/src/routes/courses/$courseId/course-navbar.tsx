import { Link, useParams } from '@tanstack/react-router';

const COURSE_NAV_LINKS = [
  { name: 'Dashboard', link: '/home/dashboard' },
  { name: 'Home', link: '/courses/$courseId/course-home' },
  { name: 'Assignments', link: '/courses/$courseId/assignments' },
  { name: 'Files', link: '/courses/$courseId/files' },
  { name: 'Media', link: '/courses/$courseId/media' },
  { name: 'Grades', link: '/courses/$courseId/grades' },
];

function CourseNavBar() {
  const { courseId } = useParams({ strict: false });

  return (
    <div className="flex justify-between items-center fixed w-full h-fit p-5 bg-white/80 shadow-md backdrop-blur-md">
      <div>Site Page</div>
      <div className="flex items-center gap-15 rounded-md p-3 bg-gray-200/80">
        {COURSE_NAV_LINKS.map((link, index) => (
          <Link
            to={link.link}
            params={{ courseId: courseId }}
            className={
              'hover:text-blue-400 duration-75 cursor-pointer [&.active]:text-blue-400'
            }
            key={index}
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div>Some button probably</div>
    </div>
  );
}

export default CourseNavBar;
