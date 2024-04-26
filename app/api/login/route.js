import { cookies } from "next/headers.js";
import db from "../config/db.js";
import bcrypt from "bcrypt";
import { SignJWT, jwtVerify } from "jose";
import { encrypt } from "./functions.js";

export async function POST(request) {
  const body = await request.json();
  const email = body.email;
  const password = body.password;
  let user_type = body.userType;

  try {
    const promise = await new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM ${user_type} WHERE email = '${email}' `,
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            if (result.length == 0) {
              reject("no account found");
            } else {
              bcrypt.compare(password, result[0].password, (err, res) => {
                if (err) {
                  reject(err);
                } else if (!res) {
                  reject("wrong password");
                } else {
                  resolve({
                    message: "logged in successfully",
                  });
                }
              });
            }
          }
        }
      );
    });
    const user = { email: email };
    const expires = new Date(Date.now() + 1000 * 60 * 60 * 24 * 7);
    const session = await encrypt({ user, expires });
    cookies().set("session", session, {
      expires,
      httpOnly: true,
    });
    const notready = await promise;
    const message = notready.message;

    return new Response(JSON.stringify({ message: message }), {
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new Response(JSON.stringify({ message: err }), {
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
      status: 500,
    });
  }
}
