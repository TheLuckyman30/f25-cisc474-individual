import { prisma } from './client';
import { users, assignments, courses, enrollments, submissions, grades } from './temp-data.json';

(async () => {
  try {
    await Promise.all(
      users.map(async (user) => {
        await prisma.user.create({
          data: { id: user.id, name: user.name, email: user.email },
        });
      }),
    );
    await Promise.all(
      courses.map(async (course) => {
        await prisma.course.create({
          data: {id: course.id, name: course.name, description: course.description}
        });
      }),
    );
    await Promise.all(
      assignments.map(async (assignment) => {
        await prisma.assignment.create({
          data: {id: assignment.id, courseId: assignment.courseId, title: assignment.title, description: assignment.description, dueDate: assignment.dueDate, openUntilDate: assignment.openUntilDate, isOpen: assignment.isOpen}
        })
      })
    )
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
    await Promise.all(
      submissions.map(async (submission) => {
        await prisma.submission.create({
          data: {id: submission.id, userId: submission.userId, courseId: submission.courseId, assignmentId: submission.assignmentId, submittedBy: submission.submittedBy, isLate: submission.isLate}
        })
      })
    );
    await Promise.all(
      grades.map(async (grade) => {
        await prisma.grade.create({
          data: {id: grade.id, submissionId: grade.submissionId, numberGrade: grade.numberGrade}
        })
      })
    );

  } catch (error) {
    console.error(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();
