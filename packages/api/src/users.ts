import {z} from "zod";

export const UserOut = z.object({
    id: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    email: z.string()
});
export type UserOut = z.infer<typeof UserOut>;

export const EditUser = z.object({
    id: z.uuid(),
    firstName: z.string(),
    lastName: z.string(),
    email: z.string()
})
export type EditUser = z.infer<typeof EditUser>;