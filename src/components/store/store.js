import { configureStore } from "@reduxjs/toolkit";

import loginSlicer from "../slices/loginSlicer";

export const store=configureStore({
    reducer:{
        loginSlicer:loginSlicer
    }
})