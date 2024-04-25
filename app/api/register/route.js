import db from "../config/db.js";
import { nanoid } from "nanoid";
import bcrypt from "bcrypt";
import { encrypt } from "../login/functions.js";
import { cookies } from "next/headers.js";

export async function POST(request) {
  const body = await request.json();
  const user_id = nanoid();
  const user_name = body.userName;
  const email = body.email;
  const salt = await bcrypt.genSalt(10);

  const password = await bcrypt.hash(body.password, salt);
  const creation_date = new Date().toISOString().slice(0, 19).replace("T", " ");

  try {
    const promise = await new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM user WHERE email = '${email}' OR user_name = '${user_name}' `,
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            if (result.length > 0) {
              reject({ message: "creds already used by an account" });
            } else {
              db.query(
                `INSERT INTO user (user_id, user_name, email, password, creation_date) VALUES ('${user_id}', '${user_name}', '${email}', '${password}', '${creation_date}')`,
                (err, result) => {
                  if (err) {
                    reject(err);
                  } else {
                    resolve({
                      message: "Account created successfully",
                    });
                  }
                }
              );
            }
          }
        }
      );
    });
    const user = { email: email };
    const expires = new Date(Date.now() + 1000 * 60 * 60 * 24 * 7);
    const session = await encrypt({ user, expires });
    const message = await promise.message;
    cookies().set("session", session, {
      expires,
      httpOnly: true,
    });

    return new Response(JSON.stringify({ message: message }), {
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new Response(JSON.stringify({ message: err.message }), {
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
      status: 500,
    });
  }
}
