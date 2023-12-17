import { useEffect } from "react";
import { useGlobalState } from "../store/Index"


export default function ConnectButton() {
  const [connectedAccount] = useGlobalState('connectedAccount')
  useEffect(() => {}, [connectedAccount]);
  return <w3m-button />
}