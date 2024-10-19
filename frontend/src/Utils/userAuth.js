import { create } from "zustand";
import axios from "axios";

const API_URL = "http://localhost:2000" //process.env.API_BACKEND_URL;

axios.defaults.withCredentials = true;

export const useAuth = create((set) => ({
  user: null,
  isAuthenticated: false,
  errorSignup: null,
  errorLogin: null,
  errorLogout: null,
  errorVerifyEmail: null,
  errorCheckAuth: null,
  errorForgotPassword: null,
  errorResetPassword: null,
  isLoading: false,
  isCheckingAuth: true,
  messageForgotPassword: null,
  messageResetPassword: null,

  signup: async (email, password, name) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/signup`, {
        email,
        password,
        name,
      });
      set({
        user: response.data.user,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error) {
      set({
        errorSignup: error.response.data.message || "Error signing up",
        isLoading: false,
      });
      throw error;
    }
  },
  login: async (email, password) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });
      set({
        isAuthenticated: true,
        user: response.data.user,
        errorLogin: null,
        isLoading: false,
      });
    } catch (error) {
      set({
        errorLogin: error.response?.data?.message || "Error logging in",
        isLoading: false,
      });
      throw error;
    }
  },

  logout: async () => {
    set({ isLoading: true, error: null });
    try {
      await axios.post(`${API_URL}/logout`);
      set({
        user: null,
        isAuthenticated: false,
        errorLogout: null,
        isLoading: false,
      });
    } catch (error) {
      set({ error: "Error logging out", isLoading: false });
      throw error;
    }
  },
  verifyEmail: async (code) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/verify-email`, { code });
      set({
        user: response.data.user,
        isAuthenticated: true,
        isLoading: false,
      });
      return response.data;
    } catch (error) {
      set({
        errorVerifyEmail:
          error.response.data.message || "Error verifying email",
        isLoading: false,
      });
      throw error;
    }
  },
  checkAuth: async () => {
    set({ isCheckingAuth: true, error: null });
    try {
      const response = await axios.get(`${API_URL}/check-auth`);
      set({
        user: response.data.user,
        isAuthenticated: true,
        isCheckingAuth: false,
      });
    } catch (error) {
      set({
        errorCheckAuth: null,
        isCheckingAuth: false,
        isAuthenticated: false,
      });
    }
  },
  forgotPassword: async (email) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/forgot-password`, {
        email,
      });
      set({ messageForgotPassword: response.data.message, isLoading: false });
    } catch (error) {
      set({
        isLoading: false,
        errorForgotPassword:
          error.response.data.message || "Error sending reset password email",
      });
      throw error;
    }
  },
  resetPassword: async (token, password) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/reset-password/${token}`, {
        password,
      });
      set({ messageResetPassword: response.data.message, isLoading: false });
    } catch (error) {
      set({
        isLoading: false,
        errorResetPassword:
          error.response.data.message || "Error resetting password",
      });
      throw error;
    }
  },
}));
