import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { NextPage } from "next";
import { AppProps } from "next/app";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ThemeProvider, useTheme } from "@mui/material";

import Layout from "@/app/global/components/layout/Layout";
import { CustomRoutingProvider } from "@/app/global/providers/CustomRoutingProvider";

dayjs.extend(relativeTime);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

type CustomAppProps = AppProps & {
  Component: NextPage;
  pageProps: any;
};

const RootLayout = ({ Component, pageProps }: CustomAppProps) => {
  const theme = useTheme();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <CustomRoutingProvider>
          <ThemeProvider theme={theme}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </CustomRoutingProvider>
      </QueryClientProvider>
    </>
  );
};

export default RootLayout;
