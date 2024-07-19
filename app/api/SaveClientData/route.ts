import { dbConnect } from "../../../lib/db";
import ClientData from "../../../models/ClientData";
import { NextResponse } from "next/server";
import { FormSchema } from "@/types/Form";

export async function POST(req: Request) {
  const body: unknown = await req.json();
  const result = FormSchema.safeParse(body);

  // check out Zod's .flatten() method for an easier way to process errors
  let zodErrors = {};
  if (!result.success) {
    result.error.issues.forEach((issue) => {
      zodErrors = { ...zodErrors, [issue.path[0]]: issue.message };
    });
    
  } 
  
  // else {
  //   await dbConnect();
  //   await ClientData.create(body);
  // }

  return NextResponse.json(
    Object.keys(zodErrors).length > 0
      ? { errors: zodErrors }
      : { success: true }
  );
}
