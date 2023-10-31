import useWebSocket from "react-use-websocket";

const useGetLiveMatchUpdates = () => {
  const { lastJsonMessage } = useWebSocket(
    `wss://gpa0yye7ka.execute-api.ap-south-1.amazonaws.com/dev/?match_id=64501`,
    {
      onOpen: () => {
        console.log("WebSocket connection established.");
      },
      onClose: () => {
        console.log("WebSocket connection dropped.");
      },
    }
  );

  return { match: lastJsonMessage };
};

export default useGetLiveMatchUpdates;
