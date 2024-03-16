import CCUser from "@/modals/CCUser";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
      const {
        firstName,
        lastName,
        email,
        phone,
        regdNo,
        year,
        branch,
        college
       } = await request.json();

     await connectDB();

     const existingEmail = await CCUser.findOne({email});
     const existingPhone = await CCUser.findOne({phone});

     if(existingEmail || existingPhone){
         return NextResponse.json({message:"User Already Exists"},{status:500});
        }

        const newUser = new CCUser({
            firstName,
            lastName,
            email,
            phone,
            regdNo,
            year,
            branch,
            college,
            session: {
                deadline: null,
            }
        });
     try {
            await newUser.save();
    } catch (error) {
        console.log("DBE1",error);
        return NextResponse.json({message:"Creation Failed"},{status:500});
    }
     return NextResponse.json({message:"Success"},{status:201});
    } catch (error) {
        console.log("DBE",error)
        return NextResponse.json({message:"Failed"},{status:500});
    }
}