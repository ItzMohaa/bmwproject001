import React from 'react'
import logo from '../assets/logo.png'
import {BsSearch,BsTelephoneFill,BsYoutube,BsTwitter,BsEnvelopeFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { variantcontext } from '../variantcontext'
import { useContext } from 'react'

const Navbar = () => {
    const variants = useContext(variantcontext)
  return (
    <motion.div initial={{x:'-100vw'}} animate={{x:0}} transition={{type:'tween', duration: 1}} className='Navbar z-10'>
        <div className='logo w-28 -mt-5' >
            <Link to='/'><img src={logo} alt="Logo Image" /></Link>
        </div>


        <ul>
            <Link to='/models'><li>MODELS</li></Link>
            <Link to='/news'><li>NEWS</li></Link>
            <Link to='/trade'><li>TRADE IN CARS</li></Link>
            <Link to='about'><li>ABOUT US</li></Link>
            <Link to='/contact'><li>CONTACT US</li></Link>
            <BsSearch className='mt-1 hover:text-blue-600 cursor-pointer'/>
        </ul>

        <div className='contact-info mb-24 mr-10'>
            <span className='flex gap-3'><BsTelephoneFill className='mt-1'/>
            <p className='mr-3'>+234 814 0967 664</p>
            <div className='flex gap-5 mt-1'>
                <BsTwitter/>
                <BsYoutube/>
                <BsEnvelopeFill/>
            </div></span> 
        </div>
    </motion.div>
  )
}

export default Navbar