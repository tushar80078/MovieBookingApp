import { createSlice } from '@reduxjs/toolkit';
import { signUpPosts, signInPosts, getAllMovies } from "../thunk/api_Thunk"


const initialState = {
    mdetails: [],
    userDetails: {}
}

const loginSlicer = createSlice({
    name: "loginSlicer",
    initialState,

    reducers: {

        getUserDetails: (state, action) => {

            state.userDatails = action.payload;

        },


        setMoviesDetails: (state, action) => {
           
            const data = action.payload;
           
            state.mdetails.push(data);
            
        },



    },

    extraReducers: (builder) => {

        //For SignUp

        builder.addCase(signUpPosts.fulfilled, (state, action) => {
            return action.payload.data;
        });

        builder.addCase(signUpPosts.pending, (state, action) => {
            //console.log("Pending",action.payload);
        })

        builder.addCase(signUpPosts.rejected, (state, action) => {
            // console.log("Rejected",action.payload);
        })

        //For SignIn

        builder.addCase(signInPosts.fulfilled, (state, action) => {

            return action.payload.data;
        });

        builder.addCase(signInPosts.pending, (state, action) => {
            // console.log("pending",action.payload);
        })

        builder.addCase(signInPosts.rejected, (state, action) => {
            //console.log("Rejected",action.payload);
        })

        //For getmovies

        builder.addCase(getAllMovies.fulfilled, (state, action) => {

            return action.payload.data;
        });

        builder.addCase(getAllMovies.pending, (state, action) => {
            // console.log("pending",action.payload);
        })

        builder.addCase(getAllMovies.rejected, (state, action) => {
            //console.log("Rejected",action.payload);
        })



    }
})

export const { getUserDetails, setMoviesDetails } = loginSlicer.actions;
export default loginSlicer.reducer;