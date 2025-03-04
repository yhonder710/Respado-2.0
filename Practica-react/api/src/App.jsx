import { useState } from 'react';
import { Products } from './components/Products.jsx';
import { useEffect } from 'react';

function App() {
  const [posts, setPosts] = useState([]);

  const getProducts = async () => {
    const response = await fetch("https://api.escuelajs.co/api/v1/products")
    const results = await response.json()
    setPosts(results)
  }

  useEffect(() => {
    getProducts()
  },[])

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        <Products posts={posts}/>
      </ul>
    </div>
  );
}

export default App;
