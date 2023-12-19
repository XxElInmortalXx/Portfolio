"use client";

import api from "../lib/axios";

export async function createWork(formData, jwt) {
  try {
    const response = await api.post("/works/create-work", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
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
    };
    return errorMessage;
  }
}

export async function getWorks() {
  try {
    const response = await api.get("/works/get-works");
    return response.data;
  } catch (error) {
    const errorMessage = {
      msg: error.response.data.error,
      error_message: error.message,
      status: error.response.status,
      error: error,
    };
    return errorMessage;
  }
}

export async function getWork(id) {
  try {
    const response = await api.get(`/works/get-work/${id}`);
    return response.data;
  } catch (error) {
    const errorMessage = {
      msg: error.response.data.error,
      error_message: error.message,
      status: error.response.status,
      error: error,
    };
    return errorMessage;
  }
}

export async function deleteWork(id, jwt) {
  try {
    const response = await api.delete(`/works/delete-work/${id}`, {
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
    };
    return errorMessage;
  }
}

export async function updateWork(id, formData, jwt) {
  try {
    const response = await api.patch(`/works/update-work/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
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
    };
    return errorMessage;
  }
}