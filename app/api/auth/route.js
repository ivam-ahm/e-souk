import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = cookies().get("session");
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
