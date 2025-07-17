import axios, { AxiosResponse } from "axios";
import { enqueueSnackbar } from "notistack";
import React from "react";
import { Stack, Typography } from "@mui/material";

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_ENDPOINT}/`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use((response: AxiosResponse) => {
  if (response.data.code !== 200) {
    if (response.data.message) {
      return Promise.reject(response.data?.message);
    }

    return {
      ...response,
    };
  } else {
    return {
      data: response.data,
      status: response.status,
      config: response.config,
      headers: response.headers,
      statusText: response.statusText,
    };
  }
});

api.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status !== 200) {
      if (response.data.message) {
        return Promise.reject(response.data?.message);
      }

      return Promise.reject(response.data.message);
    } else {
      if (response.data.code !== 200 && response.data.code !== 0) {
        if (response.data instanceof Blob === false) {
          enqueueSnackbar({
            message: React.createElement(
              Stack,
              {
                direction: "column",
                spacing: 0,
                justifyContent: "flex-start",
              },
              [
                React.createElement(
                  Typography,
                  { variant: "h6" },
                  "Terjadi Kesalahan. Silakan coba kembali.",
                ),
                React.createElement(
                  Typography,
                  { variant: "caption", color: "text.secondary" },
                  response.data.message,
                ),
              ],
            ),
            variant: "error",
            autoHideDuration: 3000,
          });
        }

        if (response.data.message) {
          return Promise.reject(response.data?.message);
        }
      }
      return {
        data: response.data,
        status: response.status,
        config: response.config,
        headers: response.headers,
        statusText: response.statusText,
      };
    }
  },

  async (error) => {
    if (error.response) {
      if (error.response.status != 401) {
        enqueueSnackbar({
          message: React.createElement(
            Stack,
            {
              direction: "column",
              spacing: 0,
              justifyContent: "flex-start",
            },
            [
              React.createElement(
                Typography,
                { variant: "h6" },
                "Terjadi Kesalahan. Silakan coba kembali.",
              ),
              React.createElement(
                Typography,
                { variant: "caption", color: "text.secondary" },
                error.message,
              ),
            ],
          ),
          variant: "error",
          autoHideDuration: 3000,
        });
      }
    }

    if (error) {
      if (error.code.includes("ERR_NETWORK")) {
        enqueueSnackbar("Tidak dapat terhubung ke jaringan.", {
          variant: "error",
          autoHideDuration: 5000,
        });
      } else {
        if (typeof error.response.data === "string") {
          return Promise.reject(error.response.data);
        }

        if (Array.isArray(error?.response?.data?.errors)) {
          return Promise.reject(error.response.data.errors[0]?.message ?? "");
        }

        if (error.response.data?.errors?.message) {
          return Promise.reject(error.response.data.errors.message);
        }
      }
    }

    return Promise.reject(error.message);
  },
);

export { api };
