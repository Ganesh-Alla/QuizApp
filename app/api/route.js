"use server"
import { cookies } from "next/headers";
import crypto from 'crypto';

function encrypt(code) {
    const cipher = crypto.Cipher('aes-256-cbc',"Nipuna2K24");
    let encrypted = cipher.update(code, 'utf-8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}



export async function login(code) {
    const expires = new Date(Date.now() + 6 * 60 * 60 * 1000);
   cookies().set('session',encrypt(code),{expires,httpOnly:true})
}

export async function logout() {
  const expires = new Date(Date.now() + 3 * 60 * 60 * 1000);
    cookies().set('session',encrypt("Logged"),{expires,httpOnly:true})
 }

 export async function getSession() {
  const session =  cookies().get('session')?.value
  if(!session) return null
  return session
}