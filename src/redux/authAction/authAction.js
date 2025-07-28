import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../api/api";

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ loginValue, toast, navigate }, { rejectWithValue }) => {
    try {
      const response = await API.post("/login", loginValue);
      const role = response?.data?.data?.role;

      toast.success(response.data.message || "Logged in successfully!");

      if (role === "admin") {
        navigate("/admin-layout");
      } else {
        navigate("/");
      }

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const userSignIn = createAsyncThunk(
  "auth/SignIn",
  async ({ SignInvalue, toast, navigate }, { rejectWithValue }) => {
    try {
      const response = await API.post("/login", SignInvalue);
      toast.success(response.data.message || "Sign in successFully!");
      navigate("/login");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
