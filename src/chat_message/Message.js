// import io from "socket.io-client";
// import { useState } from "react";
// import Chat from "./Chat";
// import Menu from '../navigation/Menu';
// import Footer from '../navigation/Footer'
// import '../chat_message/message.css'

// const socket = io.connect("http://localhost:3005");

// function Message() {
//   const [username, setUsername] = useState("");
//   const [room, setRoom] = useState("");
//   const [showChat, setShowChat] = useState(false);

//   const joinRoom = () => {
//     if (username !== "" && room !== "") {
//       socket.emit("join_room", room);
//       setShowChat(true);
//     }
//   };

//   return (
//     <div className="Message">
//         <Menu /><br/>
//       {!showChat ? (
//         <div className="joinChatContainer">
//           <h3>Rejoindre une discussion</h3>
//           <center>
//           <input
//             type="text"
//             placeholder="Andoniaina..."
//             onChange={(event) => {
//               setUsername(event.target.value);
//             }}
//           /><br/>
//           <input
//             type="text"
//             placeholder="Meme Identfication..."
//             onChange={(event) => {
//               setRoom(event.target.value);
//             }}
//           /><br/>
//           <button onClick={joinRoom}>Rejoindre une salle</button>
//           </center>
//         </div>
//       ) : (
//         <Chat socket={socket} username={username} room={room} />
//       )}
//       <Footer />
//     </div>
//   );
// }

// export default Message;