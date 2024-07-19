import { db } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { FormSchema } from "@/types/Form";
import { TFormSchema } from "@/types/Form";

export async function POST(req: Request) {
  const body: unknown = await req.json();

  const result = FormSchema.safeParse(body);

  let zodErrors = {};
  if (!result.success) {
    result.error.issues.forEach((issue) => {
      zodErrors = { ...zodErrors, [issue.path[0]]: issue.message };
    });
  } else {
    const client = await db.connect();

    try {
      if (isTFormSchema(body)) {
        // Now TypeScript knows data is of type TFormSchema
        const {FirstName, LastName, Email, Phone, Message} = body;
        await client.sql`CREATE TABLE IF NOT EXISTS ClientData ( FirstName varchar(255), LastName varchar(255), Email varchar(255), Phone varchar(255), Message varchar(255) );`;
      await client.sql`INSERT INTO Pets (FirstName, LastName, Email, Phone, Message) VALUES (${FirstName}, ${LastName} , ${Email}, ${Phone}, ${Message});`;
      }else{
        return NextResponse.json({ success: false });
      }
      
    } catch (error) {
      return NextResponse.json({ success: false }
      );
    }
  }

  return NextResponse.json(
    Object.keys(zodErrors).length > 0
      ? { errors: zodErrors }
      : { success: true }
  );
}


// function to check if the type of data body variable holds in equal to TFormSchema
function isTFormSchema(value: unknown): value is TFormSchema {
  return (
    typeof value === 'object' &&
    value !== null &&
    'FirstName' in value &&
    'LastName' in value &&
    'Email' in value &&
    'Phone' in value &&
    'Message' in value &&
    typeof (value as TFormSchema).FirstName === 'string' &&
    typeof (value as TFormSchema).LastName === 'string' &&
    typeof (value as TFormSchema).Email === 'string' &&
    typeof (value as TFormSchema).Phone === 'string' &&
    typeof (value as TFormSchema).Message === 'string'
  );
}
