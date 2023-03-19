
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { ConnectButton } from "./ConnectButton";
import Logo from "./Logo";
import useIsMounted from "../hooks/useIsMounted";
import { NetworkSwitcher } from "./utils";
import { Button, useColorMode } from "@chakra-ui/react";

const Header = () => {

  const { colorMode, toggleColorMode } = useColorMode()
  const mounted = useIsMounted()
  const { address } = useAccount();

  return (
    <header className="fixed top-0 left-0 z-10">
      {/* <Logo /> */}
      {/* <NetworkSwitcher /> */}
      {/* {isConnected && <Account />} */}


      <div className="fixed right-2 z-10 top-2">
        <ConnectButton />
      </div>

    </header>
  )
}

export default Header