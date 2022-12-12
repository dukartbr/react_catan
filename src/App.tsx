import { useRef } from "react";
import {
  Box,
  ChakraProvider,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Grid,
  useDisclosure,
} from "@chakra-ui/react";
import { Theme } from "src/themes/theme";
import ResourcePanel from "src/components/ResourcePanel";
import Header from "src/components/Header";
import { resources } from "src/resources";

function generateCatanGame() {
  return Array.from(
    { length: 40 },
    () => resources[Math.floor(Math.random() * resources.length)]
  );
}

function App() {
  const catanGame = useRef(generateCatanGame());
  const {
    isOpen: isResourcesOpen,
    onOpen: onResourcesOpen,
    onClose: onResourcesClose,
  } = useDisclosure();

  return (
    <ChakraProvider theme={Theme}>
      <Header
        onResourceOpen={onResourcesOpen}
        onResourceClose={onResourcesClose}
      />
      <Box py={12} px={16} bg='gray.200'>
        <Grid templateColumns='repeat(5, 1fr)' gap={10}>
          {/* <pre>{JSON.stringify(catanGame, null, 2)}</pre> */}
          {catanGame.current.map((resource) => (
            <ResourcePanel resource={resource} />
          ))}
        </Grid>
      </Box>
      <Drawer
        placement='bottom'
        onClose={onResourcesClose}
        isOpen={isResourcesOpen}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>Your Resources</DrawerHeader>
        </DrawerContent>
      </Drawer>
    </ChakraProvider>
  );
}

export default App;
