import {
  ListItemText,
  ListItemIcon,
  ListItemButton,
  Divider,
  Drawer,
  IconButton,
  ListItem,
  Typography,
  Box,
} from "@mui/material";
import { ReactNode } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import List from "@mui/material/List";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import HistoryIcon from "@mui/icons-material/History";
import { drawerWidth } from "../../constants";
import { useNavigate } from "react-router-dom";
import { DrawerHeader } from "./styles";
import History from "./components/History";

type ControllersElement = {
  id: number;
  text: string;
  icon: ReactNode;
};

const ControllersElements: ControllersElement[] = [
  {
    id: 1,
    text: "Start New Chat",
    icon: <AddCircleOutlineIcon />,
  },
  {
    id: 2,
    text: "Delete Chats",
    icon: <DeleteIcon />,
  },
];

type SidebarProps = {
  open: boolean;
  handleDrawerClose: () => void;
};

const Sidebar = (props: SidebarProps) => {
  const { open, handleDrawerClose } = props;
  const navigate = useNavigate();

  const handler = (id: number) => {
    switch (id) {
      case 1:
        return () => {
          navigate("/dashboard");
        };
      case 2:
        return () => {
          // sethistoryElements(undefined);
        };
    }
  };

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <Box display={"flex"} gap={4} alignItems={"center"} marginLeft={1}>
          <HistoryIcon />
          <Typography variant="h6" fontWeight="bold">
            History
          </Typography>
        </Box>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>

      <History />
      <Divider />
      <List>
        {ControllersElements.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton onClick={handler(item.id)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;