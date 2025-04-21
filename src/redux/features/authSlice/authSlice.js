import { createSlice } from "@reduxjs/toolkit";
import { userLogin } from "../../authAction/authAction";


const authSlice = createSlice({
    name: "auth",
    initialState: {
      isLoading: false,
      error: "",
      message: "",
      user: null,
      products: [],
      isAuthenticated: false,
    },
    reducers: {
        setLogout: (state) => {
          state.error = null;
          state.user = null;
          localStorage.clear();
        },
        setClearError: (state) => {
          state.error = null;
        },
      },
      extraReducers: (builder) => {
        builder
      
          .addCase(userLogin.pending,(state)=>{
            state.isLoading = true
          })
          .addCase(userLogin.fulfilled,(state,action)=>{
            state.isLoading = false
            state.user = action.payload.data
            localStorage.setItem("user",JSON.stringify(action.payload.data))
            const {token} = action.payload
            localStorage.setItem("AccessToken",token)
    
          })
          .addCase(userLogin.rejected,(state,action)=>{
            state.isLoading = false
            state.error = action.payload.message || "An Error Occured";
            
          })
        },
    });
    export const { setClearError,setLogout } = authSlice.actions;
    export default authSlice.reducer;