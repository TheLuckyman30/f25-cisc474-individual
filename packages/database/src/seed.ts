import { prisma, Role, SubmissionType } from './client';
import {
  users,
  courses,
  enrollments,
  assignments,
  submissions,
  grades,
  comments,
  announcements,
  conversations,
  messages,
} from './temp-data.json';

(async () => {
  try {
    await Promise.all(
      users.map(async (user) => {
        await prisma.user.create({
          data: {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password,
            userSchoolId: user.userSchoolId,
          },
        });
      }),
    );
    await Promise.all(
      courses.map(async (course) => {
        await prisma.course.create({
          data: {
            id: course.id,
            ownerId: course.ownerId,
            name: course.name,
            description: course.description,
          },
        });
      }),
    );
    await Promise.all(
      enrollments.map(async (enrollment) => {
        await prisma.enrollment.create({
          data: {
            id: enrollment.id,
            userId: enrollment.userId,
            courseId: enrollment.courseId,
            role: enrollment.role as Role,
          },
        });
      }),
    );
    await Promise.all(
      assignments.map(async (assignment) => {
        await prisma.assignment.create({
          data: {
            id: assignment.id,
            assignedById: assignment.assignedById,
            courseId: assignment.courseId,
            title: assignment.title,
            description: assignment.description,
            dueDate: assignment.dueDate,
            openUntilDate: assignment.openUntilDate,
            isOpen: assignment.isOpen,
            visible: assignment.visible,
            submissionType: assignment.submissionType as SubmissionType,
          },
        });
      }),
    );
    await Promise.all(
      submissions.map(async (submission) => {
        await prisma.submission.create({
          data: {
            id: submission.id,
            submitterId: submission.submitterId,
            courseId: submission.courseId,
            assignmentId: submission.assignmentId,
            submittedAt: submission.submittedAt,
            isLate: submission.isLate,
          },
        });
      }),
    );
    await Promise.all(
      grades.map(async (grade) => {
        await prisma.grade.create({
          data: {
            id: grade.id,
            submissionId: grade.submissionId,
            numberGrade: grade.numberGrade,
            visible: grade.visible,
            gradedAt: grade.gradedAt,
          },
        });
      }),
    );
    await Promise.all(
      comments.map(async (comment) => {
        await prisma.comment.create({
          data: {
            id: comment.id,
            commentorId: comment.commentorId,
            submissionId: comment.submissionId,
            courseId: comment.courseId,
            content: comment.content,
            sentAt: comment.sentAt,
          },
        });
      }),
    );
    await Promise.all(
      announcements.map(async (announcement) => {
        await prisma.announcement.create({
          data: {
            id: announcement.id,
            sentById: announcement.sentById,
            courseId: announcement.courseId,
            title: announcement.title,
            content: announcement.content,
            sentAt: announcement.sentAt,
          },
        });
      }),
    );
    await Promise.all(
      conversations.map(async (conversation) => {
        await prisma.conversation.create({
          data: {
            id: conversation.id,
            ownerId: conversation.ownerId,
            title: conversation.title,
            description: conversation.description,
            createdAt: conversation.createdAt,
            participants: {
              connect: conversation.participants.map((participant) => ({
                id: participant,
              })),
            },
          },
        });
      }),
    );
    await Promise.all(
      messages.map(async (message) => {
        await prisma.message.create({
          data: {
            id: message.id,
            conversationId: message.conversationId,
            sentById: message.sentById,
            content: message.content,
            sentAt: message.sentAt,
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