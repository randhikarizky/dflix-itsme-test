import dynamic from "next/dynamic";

import TextInfo from "./TextInfo";

const Select = dynamic(import("./Select"), { ssr: false });

export {
  Select,
  TextInfo,
};
