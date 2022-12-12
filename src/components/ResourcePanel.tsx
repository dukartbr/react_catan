import { Box, GridItem, Text } from "@chakra-ui/react";

function ResourcePanel({ resource }: { resource: string }) {
  return (
    <GridItem>
      <Box
        border='2px solid #000000'
        py={14}
        px={15}
        borderRadius={24}
        layerStyle={resource}
        _hover={{
          backgroundColor: "blue.300",
        }}
      >
        <Text textAlign='center'>{resource}</Text>
      </Box>
    </GridItem>
  );
}

export default ResourcePanel;
