import React , { useState,useEffect,useParams} from 'react'
import { Link } from 'react-router-dom';
import "./search.css"
const Search = ({allData,setAllData}) => {
    
    const [searchData,setSearchData]=useState("");
     const handleSearch = (event) => {
        setSearchData(event.target.value)
     }
     useEffect(()=>{
        // if(searchData === ""){
        //     setSearchData("a");
        // }
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=6dd7b95ff88c5a7d75faaf2d136ec8bd&language=en-US&query=${searchData}&page=1&include_adult=false
        `)
     .then(res => res.json())
     .then(data => setAllData(data.results))
     console.log(allData);
     },[searchData])
      return (
     <>
          <input className='inputSearch'
            onChange={handleSearch}
            type="text"
          />
          <Link to="/search"><button ><i class="fa fa-search" aria-hidden="true"></i></button></Link>
        
        </>
       
      );
  
}

export default Search