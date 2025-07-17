import { NextPage } from "next/types";

import HeadComponent from "@/app/global/components/Head";

const Home: NextPage = () => {
  return (
    <>
      <HeadComponent title={"Welcome"} />
      <>Udah jalan tau!</>
    </>
  );
};

export default Home;
