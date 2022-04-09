import { useColorMode } from "@chakra-ui/react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

function useThemeConfig() {
  const { colorMode } = useColorMode();
  const config = {
    navBg: colorMode === "light" ? "#05c2c8" : "#19263a",
    hHeadermd:colorMode==="light"? "white":"#19263a",
    contactBg: colorMode === "light" ? "#d8c9e3" : "#19263a",
    IconColor: colorMode === "light" ? "#718096" : "#E2E8F0",
    border: colorMode === "light" ? "1px solid #05c2c8 " : "1px solid #0e2e5e",
    borderRn: colorMode === "light" ? "1px solid #70ccf6" : "1px solid #0e2e5e",
    ContactBorder:colorMode === "light"?"1px solid rgba(32,32,23,0.23)":"2px solid #0e2e5e",
    mesBg:colorMode==="light"?"#bceef7":"#1a202c",
    chatL:colorMode==="light"?"#f0d1d1":"#2c313d",
    chatR:colorMode==="light"?"#a2d7fc":"#455ba2",
    inputBg:colorMode==="light"?"white":"#02122a",
    hColormd:colorMode==="light"?"#1c1e21":"white",
    emoPic:colorMode==="light"?"light":"dark" ,
    Icon:colorMode==="light"? MdDarkMode  : MdLightMode,

  };
  return config;
}

export { useThemeConfig };