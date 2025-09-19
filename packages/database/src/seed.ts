import { prisma } from './client';
import type { Course, User } from '../generated/client';
import { users, courses, enrollments } from './temp-data.json';

(async () => {
  try {
    await Promise.all(
      courses.map(async (course) => {
        await prisma.course.create({
          data: {id: course.id, name: course.name, description: course.description}
        });
        
        course.assignments.map(async (assignment) => {
          await prisma.assignment.create({
            data: {id: assignment.id, title: assignment.title, description: assignment.description, dueDate: assignment.dueDate, courseId: course.id}
          })
        });
      }),
    );
    await Promise.all(
      users.map(async (user) => {
        await prisma.user.create({
          data: { id: user.id, name: user.name, email: user.email },
        });
      }),
    );
    await Promise.all(
      enrollments.map(async (enrollment) => {
        await prisma.enrollment.create({
          data: {
            id: enrollment.id,
            courseId: enrollment.courseId,
            userId: enrollment.userId,
          },
        });
      }),
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();
