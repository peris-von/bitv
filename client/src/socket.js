import { io } from "socket.io-client";
const url = "https://bitv.onrender.com";

const socket = io(url);

export default socket;
