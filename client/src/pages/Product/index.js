import React from 'react'
import { useParams } from 'react-router-dom';
import { useQuery,useMutation } from "@tanstack/react-query";
import axios from 'axios'

const Product = () => {
  const params=useParams()
  const mutation=useMutation({
    mutationFn:(newProduct)=>{
      return axios.put(`https://dummyjson.com/products/${params.productId}`,newProduct)
    }
  })
  console.log(params)
  const fetchProduct = async () => {
    const response = await fetch(`https://dummyjson.com/products/${params.productId}`);
    const data = await response.json();
    return data;
  };
  const {
    loading,
    error,
    data: product,
  } = useQuery({
    queryKey: ["product",params.productId],
    queryFn: fetchProduct,
    // staleTime: 10000,
  });
  if(mutation.isLoading)
  {
    return <h3>updating...</h3>
  }
  if(mutation.isError){
    return <h3>error while mutating :{mutation.error.message}</h3>
  }
  if (loading) {
    return <h3>Loading...</h3>;
  }
if(error)
{
  return <h3>{error.message}</h3>
}
  return (

    <>
    
    <div>Product:{product.title}</div>
    <button
            onClick={() => {
              mutation.mutate({  title: 'product updated by mutation' })
            }}
          >
            Create product
          </button>
    </>
  )
}

export default Product