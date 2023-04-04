import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import Item from '../components/Item'

function Category() {
    const {categ} = useParams()

    const [categItem,setCategItem] = useState([])

    const getCategoryItem = ()=>{
        fetch(`https://fakestoreapi.com/products/category/${categ}`)
            .then(res=>res.json())
            .then(data=>setCategItem(data))
    }

    useEffect(()=>{
        getCategoryItem()
    })


  return (
    <div className='container mx-auto'>
        <h2 className='text-2xl capitalize font-bold'>{categ}</h2>
        <div className='flex justify-between flex-wrap gap-1 items-start'>
            {categItem.map((item,index)=>(
                <Item item={item} key={index}/>
            ))}
        </div>
    </div>
  )
}

export default Category