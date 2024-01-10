import * as React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import HomeIcon from "@mui/icons-material/Home";
import Person2Icon from "@mui/icons-material/Person2";
import SettingsIcon from "@mui/icons-material/Settings";
import { useMediaQuery } from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import Link from "next/link";
import {signOut } from "next-auth/react";
import {
  ListItemText,
  ListItemIcon,
  ListItemButton,
  ListItem,
  IconButton,
  Drawer,
  Divider,  
  useTheme,
  Theme,
  CSSObject,
  List,
} from "@mui/material";
import scss from "./SideMenu.module.scss";

const drawerWidth = 240;
const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const menuRouterList: string[] = ["","data", "profile", "settings", ""];
const menuListTranslations: string[] = [
  "Home",
  "Data",
  "Profile",
  "Settings",
  "Sign Out",
];
const menuListIcons = [
  <HomeIcon/>,
  <EqualizerIcon />,
  <Person2Icon />,
  <SettingsIcon />,
  <ExitToAppIcon />,
];

const SideMenu = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const mobileCheck = useMediaQuery("(min-width:600px)");
  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  const handleListItemButtonClick = (text: string) => {
    text === "Sign Out" ? signOut() : null;
    setOpen(false);
  };

  return (
    <Drawer
      anchor="left"
      variant="permanent"
      open={open}
      sx={{
        width: drawerWidth,
        ["& .MuiDrawer-paper"]: {
          left: 0,
          top: mobileCheck ? 64 : 57,
          flexShrink: 0,
          whiteSpace: "nowrap",
          boxSizing: "border-box",
          ...(open && {
            ...openedMixin(theme),
            "& .MuiDrawer-paper": openedMixin(theme),
          }),
          ...(!open && {
            ...closedMixin(theme),
            "& .MuiDrawer-paper": closedMixin(theme),
          }),
        },
      }}
    >
      <div className={scss.drawHeader}>
        <IconButton onClick={handleDrawerToggle}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </div>
      <Divider />

      <Divider />
      <List>
        {menuListTranslations.map((text, index) => (
          <ListItem key={text} disablePadding sx={{ display: "block" }}>
            <Link
              href={`/dashboard/${menuRouterList[index]}`}
              className={scss.link}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  onClick={() => handleListItemButtonClick(text)}
                  title={text}
                  aria-label={text}
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {menuListIcons[index]}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ 
                  color:theme.palette.text.primary,
                  opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideMenu;
