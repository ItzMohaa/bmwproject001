import React from 'react'
import { useState, useEffect } from 'react'
import sanityClient from '../Client';
import {Link} from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion';
import { useContext } from 'react';
import {variantcontext} from '../variantcontext';


const Models = () => {
    const variants = useContext(variantcontext);
    console.log(variants)

    const [CarModels, SetModels] = useState(null);

    useEffect(()=>{

        sanityClient.fetch(
            `*[_type =="car"]{
                _id,
                name,
                model,
                description,
                price,
                image{
                    asset->{
                        _id,
                        url
                    }
                },
                }

            `
        )
        .then((data)=>{
            SetModels(data);
            console.log(data);

        })
        .catch(console.error);
        
        


    },[]);
  return (
   
     <AnimatePresence>
     <motion.div variants={variants} initial={{scale:0}} animate={{scale:1}} exit='exit' transition={{type:'tween', duration:2}} className='z-0 cards flex flex-wrap gap-10'>
  
        {CarModels && CarModels.map((car, index)=>(
            <Link to={'/'+ car.model} key={car.model}><motion.div whileHover={{scale:1.1}}  className='flex flex-col text-center shadow-lg h-52 m-3 bg-slate-100 p-5'>
                
                <img className='carimages w-56 ' src={car.image.asset.url} alt='M4 Image'/>
                <div className='info mt-auto'>
                <h1>{car.name}</h1>
                <h2>{car.description}</h2>
                <h3>{car.price}</h3>
                </div>
                
                
                
                

            </motion.div>
            </Link>
        
            
          
           

            
        ))}
          

    </motion.div>
    </AnimatePresence>
    
  )
}

export default Models