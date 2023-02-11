    import React,{useEffect,useState} from 'react'
    
    import './Card.css'

    const Card = () => {

        const [products,setProducts]=useState([]);
        useEffect(() => {
            const fetchProducts=async()=>{
                const res=await fetch('https://fakestoreapi.com/products');
                 const data=await res.json();
                console.log(data);
                setProducts(data);

            }
           
            fetchProducts();          
        }, []);
    return (
        <>
       <div className='card'>
        {
            products.map(product=>(
                <div className="card1 " key={product.id}>
                <img src={product.image} className='w-[100px] h-[100px]' />

            <h1>{product.title}</h1>
            <p>{product.price}</p>
            <button className="btn-learn">add to card</button>

            </div>
            ))
        }
      </div>
        </>
    )
    }

export default Card
