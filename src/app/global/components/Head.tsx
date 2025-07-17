import Head from "next/head";

type Props = {
  title: string;
};

export default function HeadComponent(props: Props) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
        rel="stylesheet"
      />
      
      <Head>
        <title>{props.title} - DFlix</title>
      </Head>
    </>
  );
}
