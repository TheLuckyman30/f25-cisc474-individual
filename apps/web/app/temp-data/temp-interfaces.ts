export interface Course {
  id: string;
  name: string;
  description: string;
  assignmentIds: string[];
}

export interface Assignment {
  id: string;
  courseId: string;
  name: string;
  dueDate: string;
  description: string;
}
