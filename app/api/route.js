"use server"
import { cookies } from "next/headers";
import { encrypt,decrypt } from "@/utils/Cipher";


export async function login(code) {
    const expires = new Date(Date.now() + 6 * 60 * 60 * 1000);
   cookies().set('session',encrypt(code),{expires,httpOnly:true})
}


export async function setDeadline(code) {
  const expires = new Date(Date.now() + 6 * 60 * 60 * 1000);
  cookies().set('deadline',encrypt(code),{expires,httpOnly:true})
}

export async function logout() {
  const expires = new Date(Date.now() + 3 * 60 * 60 * 1000);
    cookies().set('session',encrypt("Logged"),{expires,httpOnly:true})
    cookies().set('deadline',"",{expires:new Date(0)})
 }

 export async function getSession() {
  const session =  cookies().get('session')?.value
  if(!session) return null
  return decrypt(session)
}

export async function getDeadline() {
  const deadline =  cookies().get('deadline')?.value
  console.log(decrypt(deadline))
  if(!deadline) return null
  return decrypt(deadline)
}