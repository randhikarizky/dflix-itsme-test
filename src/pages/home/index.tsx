import { NextPage } from "next/types";

import HeadComponent from "@/app/global/components/Head";

import HomeComponent from "@/app/features/home/presentation/components/HomeComponent";

const Home: NextPage = () => {
  return (
    <>
      <HeadComponent title={"Welcome"} />
      <HomeComponent />
    </>
  );
};

export default Home;
