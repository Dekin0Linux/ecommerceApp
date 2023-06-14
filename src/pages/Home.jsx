import React,{useEffect,useState} from 'react'
import {FaCalendarAlt,FaTruckMoving,FaCreditCard} from 'react-icons/fa'
import Item from '../components/Item'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Home() {
    const [category,setCategory] = useState([])
    const [products,setProducts] = useState([])
    const [filtered,setFiltered] = useState([])
    const searchTerm = useSelector(state=> state.cart.name)

    
    //get catergories
    const getCategory = ()=>{
        fetch('https://fakestoreapi.com/products/categories')
        .then(res=>res.json())
        .then(data=>setCategory(data))
    }

    //get all Products
    const getProduct = ()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data=>setProducts(data))
    }

    //getSearchProduct
    const getSearchProduct =()=>{
        if(searchTerm == 'undefined'){
            return
        }
        const searched = products && products.filter((item)=>item.title.toLowerCase().includes(searchTerm.toLowerCase()))
        setFiltered(searched) 
    }

    useEffect(()=>{
        getCategory()

        if(searchTerm != ''){
            getSearchProduct()
        }{
            getProduct()
        }
    },[searchTerm])
    


  return (
    <div className='container mx-auto'>
        {/* top side  */}

        {
             searchTerm != '' && filtered != [] ? '' :
            (
         
        <div className='bg-white md:flex md:h-[600px] md:gap-x-5 gap-y-10'>
            <div className='shadow-xl md:w-60 w-full flex md:block justify-between'>
                {
                 category.map((item,index)=>(
                    <Link to={`/category/${item}`} key={index}>
                        <p className='mb-10 hover:shadow-md p-4 capitalize font-medium md:text-xl'>{item}</p>
                    </Link>
                 ))
                }
            </div>

            <div className='md:flex-1'>

                <div className='bg-blue-400 md:h-[50%] md:mb-9 md:flex justify-between px-20'>
                    <img src="https://media.croma.com/image/upload/v1662424567/Croma%20Assets/Communication/Mobiles/Images/229922_biq8sa.png" alt="testImg" />

                    <div className='md:mt-20 text-white hidden lg:block'>
                        <p className='font-semibold md:text-3xl '>BIG SALE ON OUR PRODUCTS</p>
                        <p>Explore the new collection to find out amazing products <br /> available at great prices</p>
                    </div>
                    
                </div>

                <div className='md:flex justify-between md:gap-4 md:h-[45%] my-5 hidden '>
                    <div className='md:p-6 md:w-[35%]'>
                        <h4 className='font-semibold text-xl text-black'>BEST <br /> HEADSETS</h4>
                        <img src='https://i.pinimg.com/originals/d9/db/11/d9db11953a2d185d37246bb1f500c957.png' alt="img1" className='md:w-[120px]'/>
                    </div>
                    <div className='md:p-6 md:w-[35%] '>
                        <h4 className='font-semibold text-xl text-black'>PHONES</h4>
                        <img src='https://blog.thebigphonestore.co.uk/wp-content/uploads/2017/10/Apple-IPhone-PNG-Picture.png' alt="img2" className='md:w-[120px] ' />
                    </div>
                    <div className='md:p-6 md:w-[35%] '>
                        <h4 className='font-semibold text-xl text-black'>BEST <br /> HEADSETS</h4>
                        <img src='https://i.pinimg.com/originals/d9/db/11/d9db11953a2d185d37246bb1f500c957.png' alt="img3" className='md:w-[120px]'/>
                    </div>
                    
                </div>
            </div>
        </div>

        )}
    

        {/* info */}
        {
            searchTerm != '' && filtered != [] ? '' :
            (
        
        <div className='bg-white shadow-xl md:p-5 p-2 md:py-10 md:flex md:justify-between md:items-center rounded-sm md:my-10 my-5 gap-x-10'>

            <div className='inline-flex items-center justify-between gap-x-5'>
                <FaCalendarAlt size={30}/>
                <div>
                    <p className='font-bold text-lg'>24/7 Online support</p>
                    <p>Online support that is availble all day</p>
                </div>
            </div>
            <div className='inline-flex items-center justify-between gap-x-5'>
                <FaTruckMoving size={30}/>
                <div>
                    <p className='font-bold text-lg'>Fast Delivery</p>
                    <p>Fast shippment at great prices</p>
                </div>
            </div>
            <div className='inline-flex items-center justify-between gap-x-5'>
                <FaCreditCard size={30}/>
                <div>
                    <p className='font-bold text-lg'>Fast Checkout</p>
                    <p>Easy and fast checkout</p>
                </div>
            </div>
        </div>

        )}

        {
            searchTerm != '' && filtered != [] ? 
            (
                <div className='shadow-lg p-10 bg-white'>
                <p className='font-bold text-2xl'>{filtered.length < 1 ? "No items found": ''}</p>
                    <div className='flex flex-wrap gap-1 items-start'>
                        {
                            filtered.map((item,index)=>(
                                    <Item item={item} key={index}/>
                            ))
                        }
                        
                    </div>
                </div>
            ) : 
            (
                <div className='shadow-lg p-10 bg-white'>
                <p className='font-bold text-2xl'>Our Products</p>
                <div className='flex justify-between flex-wrap gap-1 items-start'>
                    {
                        products.map((item,index)=>(
                                <Item item={item} key={index}/>
                        ))
                    }
                </div>
                </div>
            )
        }

       

        {/* Prodcuts */}
        
        
    </div>
  )
}

export default Home