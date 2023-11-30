import { headers } from 'next/headers'
import products from "../../../products";
export async function GET(request: Request, {params}: {params: {id: string | undefined}}) {
  const headersList = headers()
  const referer = headersList.get('referer')


  return new Response(JSON.stringify(products), {
    status: 200,
    headers: { referer: referer || '' },
  })
}