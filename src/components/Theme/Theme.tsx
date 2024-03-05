import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import EditIcon from "@mui/icons-material/Edit";
import { useColorScheme } from "@mui/material";

const actions = [
  { icon: <LightModeIcon />, name: "Light", value: "light" },
  { icon: <DarkModeOutlinedIcon />, name: "Dark", value: "dark" },
  { icon: <SettingsBrightnessIcon />, name: "System", value: "system" },
];

export default function OpenIconSpeedDial() {
  const { mode, setMode } = useColorScheme();

  const handleChange = (action: any) => {
    setMode(action);
  };
  return (
    <Box
      sx={{
        height: 320,
        transform: "translateZ(0px)",
        flexGrow: 1,
        position: "fixed",
        bottom: 30,
        right: 10,
      }}>
      <SpeedDial
        ariaLabel='SpeedDial openIcon example'
        sx={{ position: "absolute", bottom: 1, right: 16, zIndex: 99 }}
        icon={<SpeedDialIcon openIcon={<EditIcon />} />}>
        {actions.map((action) => (
          <SpeedDialAction
            onClick={() => {
              handleChange(action.value);
            }}
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
