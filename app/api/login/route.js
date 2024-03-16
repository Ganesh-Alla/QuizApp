import CCUser from "@/modals/CCUser";
import connectDB, { disconnectDB } from "@/utils/db";
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

      await disconnectDB();
     if(!existingEmail){
         return NextResponse.json({message:"No Email Found"},{status:500});
        }
    else if(!existingPhone){
        return NextResponse.json({message:"Incorect Phone"},{status:500});
       }

      if(existingEmail._id.toString() === existingPhone._id.toString()){
          return NextResponse.json({message:"Success",result:existingEmail.result},{status:201});
      }
      else{
        return NextResponse.json({message:"Auth Failed"},{status:500});
      }
    } catch (error) {
        console.log("DBE",error)
        return NextResponse.json({message:"Failed"},{status:500});
    }
}