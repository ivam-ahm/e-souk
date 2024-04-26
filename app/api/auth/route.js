import { cookies } from "next/headers";
import { decrypt } from "../login/functions";

export async function GET() {
  const cookieStore = cookies().get("session");
  const session = decrypt(cookieStore.value);
  console.log(session);
  if (!cookieStore) {
    return new Response(JSON.stringify({ message: "no session" }), {
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
      status: 404,
    });
  }
  return new Response(JSON.stringify({ message: "success" }), {
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
    status: 200,
  });
}
