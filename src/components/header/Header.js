import React from 'react'
import "./Header.css"
import {Link} from "react-router-dom"
import imgs from "../../assests/download.png"
import Search from '../search/Search'
const Header = ({allData,setAllData}) => {
  return (
    <div className='headedr'>
        <div className='headerLeft'>
            <Link to="/"> <img className='header__icon' src={imgs}/> </Link>
            <Link to="/movies/popular" style={{textDecoration : "none"}}> <span>Popular</span> </Link>
            <Link to="/movies/top_rated" style={{textDecoration : "none"}}><span>Top Rated</span></Link>
            <Link to="/movies/upcoming" style={{textDecoration : "none"}}><span>Upcoming</span></Link>
           <Search allData={allData} setAllData={setAllData}/>
        </div>
    </div>
  )
}

export default Header