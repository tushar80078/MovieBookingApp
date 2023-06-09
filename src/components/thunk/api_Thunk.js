import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios";

const URL="http://localhost:8080";


export const signUpPosts=createAsyncThunk(

    'signUpPosts',
    async (userData) =>{
        const res=await axios.post(`${URL}/user/create`,userData);
        return res;
    }
)

export const signInPosts=createAsyncThunk(

    'signInPosts',
    async (userData) =>{
        const res=await axios.post(`${URL}/user/login`,userData);
        return res;
    }
)

export const getAllMovies=createAsyncThunk(
    'getAllMovies',
    async()=>{
        const res=await axios.get(`${URL}/movie`);
        return res.data;
    }
)