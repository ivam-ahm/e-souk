import db from "../config/db.js";
import bcrypt from "bcrypt";

export async function POST(request) {
  const body = await request.json();
  const email = body.email;
  const password = body.password;

  try {
    const promise = await new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM user WHERE email = '${email}' `,
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            if (result.length == 0) {
              reject("wrong email");
            } else {
              console.log(result[0].password, password);
              bcrypt.compare(password, result[0].password, (err, res) => {
                if (err) {
                  reject(err);
                } else if (!res) {
                  reject("wrong password");
                } else {
                  resolve("logged in successfully");
                }
              });
            }
          }
        }
      );
    });

    return new Response(JSON.stringify({ message: "logged in successfully" }), {
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
