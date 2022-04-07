import { FC } from "react"
import { Button, HStack, StackProps } from "@chakra-ui/react"
import { Link as GatsbyLink } from "gatsby"
import { Location } from "@reach/router"
import useChakraBreakpoint from "../../hooks/useChakraBreakpoint"

// @ts-ignore
const RolesNav = ({ location, ...props }) => {
  const { pathname } = location
  const isSmallScreen = useChakraBreakpoint("md")

  return (
    <HStack
      bg="gray.800"
      p={2}
      borderRadius="md"
      justifyContent="space-between"
      {...props}
    >
      <Button
        as={GatsbyLink}
        to="/earn/staker"
        variant={pathname.includes("/staker") ? "outline" : "ghost"}
        width="full"
      >
        Staker
      </Button>
      <Button
        as={GatsbyLink}
        to="/earn/liquidity-provider"
        variant={pathname.includes("/liquidity-provider") ? "outline" : "ghost"}
        width="full"
      >
        Liquidity {!isSmallScreen && "Provider"}
      </Button>
      <Button
        as={GatsbyLink}
        to="/earn/btc"
        variant={pathname.includes("/btc") ? "outline" : "ghost"}
        width="full"
      >
        BTC/tBTC {!isSmallScreen && "User"}
      </Button>
      <Button
        as={GatsbyLink}
        to="/earn/token-holder"
        variant={pathname.includes("/token-holder") ? "outline" : "ghost"}
        width="full"
      >
        Token Holder
      </Button>
    </HStack>
  )
}

const RolesNavWrapper: FC<StackProps> = (props) => {
  return (
    <Location>
      {(locationProps) => <RolesNav {...locationProps} {...props} />}
    </Location>
  )
}

export default RolesNavWrapper
