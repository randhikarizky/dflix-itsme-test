import { Fab } from "@mui/material";
import { Tooltip } from "@mui/material";
import Icon from "./Icon";
import { useRouter } from "next/router";
import { useCustomRouting } from "../providers/CustomRoutingProvider";

interface Props {
  previousPath?: string;
}

export default function BackButton({ previousPath, ...other }: Props) {
  const router = useRouter();
  const { previousUrl } = useCustomRouting();

  return (
    <Tooltip title="Kembali">
      <Fab
        color="default"
        size="small"
        variant={"circular"}
        onClick={() =>
          router.asPath.includes("edit")
            ? (window.location.href = previousPath ? previousPath : previousUrl)
            : router.push(
                previousPath ? previousPath : previousUrl,
                previousPath ? previousPath : previousUrl,
                { shallow: false },
              )
        }
      >
        <Icon width={24} icon="material-symbols:undo-rounded" />
      </Fab>
    </Tooltip>
  );
}
