"use client";

import api from "../lib/axios";

export async function registerUser(formData) {
  try {
    const response = await api.post("/users/auth/register", formData);
    return response.data;
  } catch (error) {
    const errorMessage = {
      msg: error.response.data.error,
      error_message: error.message,
      status: error.response.status,
      error: error,
    }
    return errorMessage;
  }
}

export async function confirmUser(token) {
  try {
    const response = await api.get(`/users/auth/confirm-user/${token}`);
    return response.data;
  } catch (error) {
    const errorMessage = {
      msg: error.response.data.error,
      error_message: error.message,
      status: error.response.status,
      error: error,
    }
    return errorMessage;
  }
}

export async function loginUser(formData) {
  try {
    const response = await api.post("/users/auth/login", formData);
    return response.data;
  } catch (error) {
    const errorMessage = {
      msg: error.response.data.error,
      error_message: error.message,
      status: error.response.status,
      error: error,
    }
    return errorMessage;
  }
}

export async function forgotPassword(formdata) {
  try {
    const response = await api.post(`/users/auth/forgot-password`, formdata);
    return response.data;
  } catch (error) {
    const errorMessage = {
      msg: error.response.data.error,
      error_message: error.message,
      status: error.response.status,
      error: error,
    }
    return errorMessage;
  }
}

export async function resetPassword(token, formdata) {
  try {
    const response = await api.post(`/users/auth/reset-password/${token}`, formdata);
    return response.data;
  } catch (error) {
    const errorMessage = {
      msg: error.response.data.error,
      error_message: error.message,
      status: error.response.status,
      error: error,
    }
    return errorMessage;
  }
}

export async function getUsers(jwt) {
  try {
    const response = await api.get("/users/get-users", {
      headers: {
        Authorization: jwt,
      },
    });
    return response.data;
  } catch (error) {
    const errorMessage = {
      msg: error.response.data.error,
      error_message: error.message,
      status: error.response.status,
      error: error,
    }
    return errorMessage;
  }
}

export async function deleteUser(id, jwt) {
  try {
    const response = await api.delete(`/users/delete-user/${id}`, {
      headers: {
        Authorization: jwt,
      },
    });
    return response.data;
  } catch (error) {
    const errorMessage = {
      msg: error.response.data.error,
      error_message: error.message,
      status: error.response.status,
      error: error,
    }
    return errorMessage;
  }
}

export async function sendEmail(formData) {
  try {
    const response = await api.post("/users/send-email", formData);
    return response.data;
  } catch (error) {
    const errorMessage = {
      msg: error.response.data.error,
      error_message: error.message,
      status: error.response.status,
      error: error,
    }
    return errorMessage;
  }
}

export async function getUser() {
  try {
    const response = await api.get("/users/get-user");
    return response.data;
  } catch (error) {
    const errorMessage = {
      msg: error.response.data.error,
      error_message: error.message,
      status: error.response.status,
      error: error,
    }
    return errorMessage;
  }
} 