import { z } from "zod";
 
export const CourseOut = z.object({
    id: z.uuid(),
    ownerId: z.uuid(),
    name: z.string(),
    description: z.string()
});
export type CourseOut = z.infer<typeof CourseOut>;