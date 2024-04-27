import db from "../config/db";

export async function GET() {
  const q =
    "SELECT product.name, product.description, product.category_id, product.product_image, product_category.category_name, product_item.price FROM product JOIN product_category ON product.category_id = product_category.id JOIN product_item ON product_item.product_id = product.id  WHERE product_category.category_name = 'casual';";
  const promise = await new Promise((resolve, reject) => {
    db.query(q, (err, result) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
  const data = await promise;
  console.log(data);
  return new Response(JSON.stringify(data), {
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
    status: 200,
  });
}
