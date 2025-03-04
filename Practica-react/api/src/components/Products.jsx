export function Products ({ posts }) {
  return(
    <main>
      {
        posts.map(products => (
          <li key={products.id}>
            <strong>{products.title}</strong>
            <div>
            <img src={products.images} width={200} alt="" />
            </div>
          </li>
        ))
      }
    </main>
  )
}
