import {
  AppBar,
  AppBarProps,
  Breakpoint,
  Container,
  ContainerProps,
  Toolbar,
  ToolbarProps,
  useTheme,
  Box,
  iconButtonClasses,
} from "@mui/material";
import { useScroll } from "../../hooks/useScroll";
import Logo from "../Logo";

export type LayoutHeaderProps = AppBarProps & {
  layoutQuery: Breakpoint;
  disableOffset?: boolean;
  disableElevation?: boolean;
  sections?: {
    left?: React.ReactNode;
    right?: React.ReactNode;
    top?: React.ReactNode;
    center?: React.ReactNode;
    bottom?: React.ReactNode;
  };
  slotProps?: {
    toolbar?: ToolbarProps;
    container?: ContainerProps;
  };
};

export default function Navbar() {
  const theme = useTheme();

  const { offsetTop } = useScroll();

  return (
    <AppBar
      position="sticky"
      sx={{
        zIndex: 1100,
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          minHeight: "auto",
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
          transition: theme.transitions.create(["height", "background-color"], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          [theme.breakpoints.up("sm")]: {
            minHeight: "auto",
          },
          [theme.breakpoints.up("lg")]: {
            height: "5rem",
          },
          [`& .${iconButtonClasses.root}`]: {
            color: theme.palette.text.secondary,
          },
          ...(offsetTop && {
            backdropFilter: "blur($6px)",
            WebkitBackdropFilter: "blur($6px)",
            backgroundColor: theme.palette.background.default,
          }),
        }}
      >
        <Container
          sx={{
            height: 1,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Logo />
          <Box
            sx={{ display: "flex", flex: "1 1 auto", justifyContent: "center" }}
          >
            {/*  */}
          </Box>
        </Container>
      </Toolbar>
      {offsetTop && (
        <span
          style={{
            left: 0,
            right: 0,
            bottom: 0,
            margin: "auto",
            height: 24,
            zIndex: -1,
            opacity: 0.48,
            borderRadius: "50%",
            position: "absolute",
            width: `calc(100% - 48px)`,
            boxShadow: theme.shadows[8],
          }}
        />
      )}
    </AppBar>
  );
}
