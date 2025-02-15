import { FC } from "react"
import { HStack, Icon } from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"

const HamburgerButton: FC<{ openDrawer: () => void }> = ({ openDrawer }) => {
  return (
    <HStack>
      <Icon
        onClick={openDrawer}
        color="brand.100"
        _hover={{
          cursor: "pointer",
          color: "white",
        }}
        boxSize={6}
        display={{ base: "block", lg: "none" }}
        variant="ghost"
        as={HamburgerIcon}
      />
    </HStack>
  )
}

export default HamburgerButton
