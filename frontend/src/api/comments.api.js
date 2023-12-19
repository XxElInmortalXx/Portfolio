"use client";

import api from "../lib/axios";

export async function getBlogIdComments(id) {
  try {
    const response = await api.get(`/comments/get-blog-comments/${id}`);
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

export async function getWorkIdComments(id) {
  try {
    const response = await api.get(`/comments/get-work-comments/${id}`);
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

export async function createCommentBlog(id, formData, jwt) {
  try {
    const response = await api.post(`/comments/create-comment-blog/${id}`, formData, {
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

export async function createCommentWork(id, formData, jwt) {
  try {
    const response = await api.post(`/comments/create-comment-work/${id}`, formData, {
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

export async function deleteComment(id, jwt) {
  try {
    const response = await api.delete(`/comments/delete-comment/${id}`, {
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