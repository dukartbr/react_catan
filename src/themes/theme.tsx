import { extendTheme } from "@chakra-ui/react";

const Theme = extendTheme({
  layerStyles: {
    wood: {
      bg: "orange.800",
      color: "white",
    },
    oar: {
      bg: "gray.700",
      color: "white",
    },
    sheep: {
      bg: "gray.500",
      color: "white",
    },
    wheat: {
      bg: "yellow.300",
      color: "gray.900",
    },
    brick: {
      bg: "red.900",
      color: "white",
    },
  },
});

export { Theme };
