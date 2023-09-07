import React,{useState} from 'react'
import s from './LiveScore.module.css'
import shaurya_logo from '../../assets/shauya22-.png'
import {AiOutlineSearch} from 'react-icons/ai'
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";


import { data } from './data'


const Menu = () => (
  <>
    <div className="  text-white">
      <div className="">
        <h1 className="my-2    ">
          <a href="#">Home</a>
        </h1>
        <h1 className="my-2   ">
          <a href="#">Events</a>
        </h1>
      </div>
      <div className="">
        <h1 className="my-2 ">
          <a href="#">Sponsors</a>
        </h1>

        <h1 className="my-2  ">
          <a href="#">Team</a>
        </h1>
      </div>
     
    </div>
  </>
);



    



const LiveScore = () => {
  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const [toggleMenu, setToggleMenu] = useState(false);
  
  return (
    <>


    <div className={"flex bg-black  text-orange-500  "}>
      <div className="flex items-center justify-between  w-full">
        <div>
      
          <h1>
            <img className={"w-20 ml-12 mb-2" + s.logo1} src={shaurya_logo} alt="" />
          </h1>
        </div>
        <div
          className={"flex gap-32 items-center font-mono font-semibold pr-10"}
        >
          <div className='flex'>
          
              <input  className={s.searchInput}  type="text" placeholder='Search your sports' />
              
              </div>
         
          <h1 className={"my-6  hover:text-white hidden md:block"}>
            <a href="#">EVENTS</a>
          </h1>
          <h1 className={"my-6 hover:text-white hidden md:block"}>
            <a href="#">SPONSORS</a>
          </h1>
          <h1 className={"my-6  hover:text-white hidden md:block"}>
            <a href="#">TEAM</a>
          </h1>

          
        </div>
      </div>
      <div className={"absolute top-0 right-0 mt-7 " + s.hammenu}>
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && <Menu />}
      </div>
    </div>
  
    
 



  
 



<div  className={s.lpmainpage}>
<div className={s.search_Game_Categories}>
  <h1 className='ml-2 mt-4 text-3xl text-white'>Game Categories</h1>


  <div className='relative flex items-center'>
        <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
        <div
          id='slider'
          className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
        >
  {data.map((item) => (
           <button  className><img
              className='w-[120px] inline-block p-2 cursor-pointer hover:scale-125 ease-in-out duration-300'
              src={item.img}
              alt='/'
            />
            </button>
          ))}
                 </div>
                 <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
      </div>
      <div className='flex' >
     
      <h1 className='w-1/3 text-5xl ml-2 text-white '>RESULTS
        <div className={s.lp_pastmatches_inside}>
           <h1 className={s.lp_pastmatches_college}>College A vs College B  </h1> 
           <h1 className={s.lp_pastmatches_scores}  >1:1</h1>
           <h1 className={s.lp_pastmatches_college}>College A vs College B  </h1> 
           <h1 className={s.lp_pastmatches_scores}  >1:1</h1>
           <h1 className={s.lp_pastmatches_college}>College A vs College B  </h1> 
           <h1 className={s.lp_pastmatches_scores}  >1:1</h1>
           <h1 className={s.lp_pastmatches_college}>College A vs College B  </h1> 
           <h1 className={s.lp_pastmatches_scores}  >1:1</h1>
           <h1 className={s.lp_pastmatches_college}>College A vs College B  </h1> 
           <h1 className={s.lp_pastmatches_scores}  >1:1</h1>
           <h1 className={s.lp_pastmatches_college}>College A vs College B  </h1> 
           <h1 className={s.lp_pastmatches_scores}  >1:1</h1>
           <h1 className={s.lp_pastmatches_college}>College A vs College B  </h1> 
           <h1 className={s.lp_pastmatches_scores}  >1:1</h1>
           <h1 className={s.lp_pastmatches_college}>College A vs College B  </h1> 
           <h1 className={s.lp_pastmatches_scores}  >1:1</h1>
        </div>
      </h1>

      <h1 className='ml-2 text-5xl text-white w-2/3'>Live Scores
        <div className={s.lp_livescore_inside}>
          
      </div>
      </h1>


      </div>
</div>

</div>


   







 


    
    
    </>
      
    
  )

  }

export default LiveScore
