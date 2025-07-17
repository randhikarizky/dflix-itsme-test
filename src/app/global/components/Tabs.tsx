import type { Theme, SxProps } from "@mui/material/styles";

import NoSsr from "@mui/material/NoSsr";
import {
  Tab,
  tabClasses,
  Tabs,
  tabsClasses,
  TabsProps,
  useTheme,
} from "@mui/material";

import { SelectOption } from "@/app/global/interfaces/form.interface";

// ----------------------------------------------------------------------

export type CustomTabsProps = TabsProps & {
  options: SelectOption[];
  slotProps?: TabsProps["slotProps"] & {
    scroller?: SxProps<Theme>;
    indicator?: SxProps<Theme>;
    tab?: SxProps<Theme>;
    selected?: SxProps<Theme>;
    scrollButtons?: SxProps<Theme>;
    flexContainer?: SxProps<Theme>;
  };
};

export default function CustomTabs({
  options,
  slotProps,
  sx,
  ...other
}: CustomTabsProps) {
  const theme = useTheme();
  return (
    <Tabs
      sx={{
        gap: { sm: 0 },
        minHeight: 42,
        flexShrink: 0,
        alignItems: "center",
        bgcolor: theme.palette.background.paper,
        [`& .${tabsClasses.scroller}`]: {
          p: 1,
          ...slotProps?.scroller,
        },
        [`& .${tabsClasses.flexContainer}`]: {
          gap: 0,
          ...slotProps?.flexContainer,
        },
        [`& .${tabsClasses.scrollButtons}`]: {
          borderRadius: 1,
          minHeight: "inherit",
          ...slotProps?.scrollButtons,
        },
        [`& .${tabsClasses.indicator}`]: {
          py: 1,
          height: 1,
          bgcolor: "transparent",
          "& > span": {
            width: 1,
            height: 1,
            borderRadius: 1,
            display: "block",
            bgcolor: theme.palette.background.paper,
            boxShadow: (theme) => theme.shadows[15],
            ...slotProps?.indicator,
          },
        },
        [`& .${tabClasses.root}`]: {
          py: 1,
          px: 2,
          zIndex: 1,
          minHeight: "auto",
          ...slotProps?.tab,
          [`&.${tabClasses.selected}`]: {
            ...slotProps?.selected,
          },
        },
        ...sx,
      }}
      {...other}
      TabIndicatorProps={{
        children: (
          <NoSsr>
            <span />
          </NoSsr>
        ),
      }}
    >
      {options.map((d) => (
        <Tab key={d.value} value={d.value} label={d.label} />
      ))}
    </Tabs>
  );
}
