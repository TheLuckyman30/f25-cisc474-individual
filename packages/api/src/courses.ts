import { z } from "zod";
 
export const CourseOut = z.object({
    id: z.uuid(),
    ownerId: z.uuid(),
    name: z.string(),
    description: z.string()
});
export type CourseOut = z.infer<typeof CourseOut>;

export const CreateCourse = z.object({
    ownerId: z.uuid(),
    name: z.string(),
    description: z.string()
});
export type CreateCourse = z.infer<typeof CreateCourse>;

export const DeleteCourse = z.object({
    id: z.uuid(),
});
export type DeleteCourse = z.infer<typeof DeleteCourse>