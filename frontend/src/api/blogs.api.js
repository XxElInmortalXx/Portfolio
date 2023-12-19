"use client";

import api from "../lib/axios";

export async function createBlog(formData, jwt) {
  try {
    const response = await api.post("/blogs/create-blog", formData, {
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

export async function getBlogs() {
    try {
      const response = await api.get("/blogs/get-blogs");
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

export async function getBlog(id) {
  try {
    const response = await api.get(`/blogs/get-blog/${id}`);
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

export async function editBlog(id, formData, jwt) {
  try {
    const response = await api.patch(`/blogs/update-blog/${id}`, formData, {
        headers: {
            Authorization: jwt
        }
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

export async function deleteBlog(id, jwt) {
  try {
    const response = await api.delete(`/blogs/delete-blog/${id}`, {
        headers: {
            Authorization: jwt
        }
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
