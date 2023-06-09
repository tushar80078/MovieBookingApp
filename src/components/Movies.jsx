import React, { useEffect, useState } from "react";
import {getAllMovies} from "./thunk/api_Thunk"
import {useDispatch,useSelector} from 'react-redux'
import {setMoviesDetails} from "./slices/loginSlicer"
import { useNavigate } from "react-router-dom";



const Movies = () => {

  const dispatch=useDispatch();
  const [data,setData]=useState([]);
  const navigate=useNavigate();

 
  const getMovies= async()=>{
        
      const d=await dispatch(getAllMovies());
      setData(d.payload.data);
        }

      useEffect(()=>{
      
        getMovies();
        
      },[])

    
      const handleClick=(moviesData)=>{
          dispatch(setMoviesDetails(moviesData));
          //navigate("/showmovie");
      }



  return (
    <div className="mt-4 mx-3 "> 

  
        <h2 className="fw-bolder">Recomended Movies</h2>

    <div className="mx-5 mt-4 movies">
      
       {
        data.map((ele,i)=>{
          return <div key={i} className="card" style={{width: "16rem"}}>
          <img src={ele.imageURL} onClick={()=>handleClick(ele)} className="card-img-top" alt="Image Not Found" />
        </div>
        })
       }
    
      
     
    </div>
    </div>   
  );
};

export default Movies;
