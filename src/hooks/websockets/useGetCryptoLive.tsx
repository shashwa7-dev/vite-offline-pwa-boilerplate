import useWebSocket from "react-use-websocket";

const useGetCryptoLive = () => {
  const { lastJsonMessage } = useWebSocket(`ws://13.232.111.40:4000/`, {
    onOpen: () => {
      console.log("crypto live WebSocket connection established.");
    },
    onClose: () => {
      console.log("crypto live WebSocket connection dropped.");
    },
  });

  return { crypto: lastJsonMessage };
};

export default useGetCryptoLive;
