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
      isAuthenticated: !!localStorage.getItem("AccessToken"),
    },
    reducers: {
        setLogout: (state) => {
          state.error = null;
          state.user = null;
          localStorage.clear();
        },
        setUser: (state, action) => {
  state.user = action.payload;
  state.isAuthenticated = !!action.payload;
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
             state.isAuthenticated = !!action.payload;
            localStorage.setItem("user",JSON.stringify(action.payload.data))
            const {accessToken} = action.payload
            localStorage.setItem("AccessToken",accessToken)
    
          })
          .addCase(userLogin.rejected,(state,action)=>{
            state.isLoading = false
            state.error = action.payload.message || "An Error Occured";
            
          })
        },
    });
    export const { setClearError,setLogout,setUser } = authSlice.actions;
    export default authSlice.reducer;