import { NextResponse } from "next/server";
import { updateSession } from "./functions.js";

export async function middleware(request) {
  return await updateSession(request);
}
