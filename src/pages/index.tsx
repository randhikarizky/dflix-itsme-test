import { useEffect } from "react";
import { useRouter } from "next/router";

import { NextPage } from "next/types";

const Index: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
      router.push("/home", undefined, { shallow: false });
  }, [router.pathname]);

  return <></>;
};

export default Index;
