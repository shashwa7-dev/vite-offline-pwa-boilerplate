import useWebSocket from "react-use-websocket";

const useGetEventOdds = () => {
  const { lastJsonMessage } = useWebSocket(
    `ws://13.232.111.40:8080?eventId=fdf49b47-e4d8-49cc-b3a8-9b8c436be79e`,
    {
      onOpen: () => {
        console.log("Event Odds WebSocket connection established.");
      },
      onClose: () => {
        console.log("Event Odds WebSocket connection dropped.");
      },
    }
  );

  return { odds: lastJsonMessage };
};

export default useGetEventOdds;
