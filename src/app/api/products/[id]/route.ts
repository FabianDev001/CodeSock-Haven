import { headers } from "next/headers";
import products from "../../../../products";
export async function GET(
  request: Request,
  { params }: { params: { id: string | undefined } }
) {
  const headersList = headers();
  const referer = headersList.get("referer");

 

  if (params.id === undefined) {
    return new Response(JSON.stringify(products), {
      status: 200,
      headers: { referer: referer || "" },
    });
  } else {
    const productId: string = params.id;
    const product = products.find(
      (product) => product.id === parseInt(productId)
    );

    if (!product) {
      return new Response("Product not found", { status: 404 });
    }

    return new Response(JSON.stringify(product), {
      status: 200,
      headers: { referer: referer || "" },
    });
  }
}
