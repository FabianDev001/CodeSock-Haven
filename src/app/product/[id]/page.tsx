import ProductShowcase from "../../../../components/productShowCase";



export default async function Page({
  params: { id },
}: {
  params: { id: number }
}) {


  const productData = {
    id: id,
    name: `Product ${id}`,
    price: `$${(Math.random() * 100).toFixed(2)}`,
    imageUrl: `/images/ProgrammingSocks${id}.jpg`,
  };

  // Use API
 
  return (
    <>
      <h1>{productData.name}</h1>
      <ProductShowcase product={productData}></ProductShowcase>
    </>
  )
}