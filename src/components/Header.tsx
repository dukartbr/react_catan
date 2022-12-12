import { Box, Button, Flex, Spacer, Text } from "@chakra-ui/react";

export default function Header({
  onResourceOpen,
  onResourceClose,
}: {
  onResourceOpen: () => void;
  onResourceClose: () => void;
}) {
  return (
    <Box bg='blue.400' py={6} px={20}>
      <Flex width='100%'>
        <Text>React Catan</Text>
        <Spacer />
        <Button onClick={onResourceOpen}>View Resources</Button>
      </Flex>
    </Box>
  );
}
