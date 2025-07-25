
import React from 'react'
import './App.css'
import Hero from './components/Hero'
import Footer from './utils/Footer'
import { Route, Routes } from 'react-router-dom'
import Header from './utils/Header'
import Blog from './components/BlogPosts/Blog'
import BookingOne from './utils/BookineOne.jsx'

export default function App() {
  return (
    <>
      <Header /> 

      <Routes>
        <Route path="/" element={<Hero />} />
 <Route path="/blogs" element={<Blog />} />
 <Route path="/EnterYourPhoneNumber" element={<BookingOne/>} />

        {/* aur bhi route yahan aa sakte hain */}
      </Routes>

      <Footer /> 
    </>
  );
}



//   return (
//   <>
// {/* <div className='mt-[110px]'></div> */}
//     <Header  />
//       <Hero  />

//       <Footer />
//   </>
//   )
// }

