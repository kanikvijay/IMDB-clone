import React from 'react'
import { useParams } from 'react-router-dom'
import Card from '../header/card/Card'
import MovieList from '../header/moviesList/MovieList'

const SearchBody = ({allData}) => {
  const {type}=useParams()
  
    
  if (allData) {
    return (
   <div className='movie__list'>
        <h2 className='list__title'>{(type?type:"Searched Movies").toUpperCase()}</h2>
        <div className='list__cards'>
            {
              allData.map(movie=>(
                    <Card movie={movie}/>
                ))
            }
        </div>
    </div> 
    )
  }else{
  return (
    <MovieList/>
    
  )
  }
}

export default SearchBody