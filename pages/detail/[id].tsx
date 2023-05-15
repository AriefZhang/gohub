export default function ProductDetail({ data }: any) {
  console.log(data)
  return <div>id</div>
}

export async function getServerSideProps({ params }: any) {
  const productId = Number(params["id"])
  const URL = `https://dummyjson.com/products/${id}`
  const resp = await fetch(URL)
  const data = await resp.json()

  return { props: { data } }
}
