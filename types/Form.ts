import {z} from "zod";

export const FormSchema = z.object({
    FirstName : z.string().min(3,"First name must be atleast 3 characters long."),
    LastName : z.string().min(3,"Last name must be atleast 3 characters long."),
    Email : z.string().email(),
    Phone : z.string().min(10, "Phone number must be 10 characters long."),
    Message : z.string().min(10, "Message must be atleast 10 characters long.")
})

export type TFormSchema = z.infer<typeof FormSchema>;