import CCUser from "@/modals/CCUser";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
      const {
        email,
        phone,
       } = await request.json();

     await connectDB();

     const existingEmail = await CCUser.findOne({email});
     const existingPhone = await CCUser.findOne({phone});

     if(!existingEmail && existingPhone){
         return NextResponse.json({message:"Incorect Email"},{status:500});
        }
    else if(existingEmail && !existingPhone){
        return NextResponse.json({message:"Incorect Phone"},{status:500});
       }
       else if(!existingEmail && !existingPhone){
        return NextResponse.json({message:"No User Found"},{status:500});
       }

      if(existingEmail._id.toString() === existingPhone._id.toString()){
          return NextResponse.json({message:"Success"},{status:201});
      }
      else{
        return NextResponse.json({message:"Auth Failed"},{status:500});
      }
    } catch (error) {
        console.log("DBE",error)
        return NextResponse.json({message:"Failed"},{status:500});
    }
}