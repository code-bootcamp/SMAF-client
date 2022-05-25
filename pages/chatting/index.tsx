import Script from "next/script";
import { io } from "socket.io-client";
import styled from "@emotion/styled";
import { useState } from "react";

const Span = styled.span`
  font-size: large;
`;

const Div = styled.div`
  position: fixed;
`;

const Wrapper = styled.div`
  width: 200px;
  height: 300px;
`;

export default function SoketChat() {
  // 📌  서버랑연결하는 곳
  const socket = io("http://34.64.156.215:3000/chattings");

  // const nickname = prompt("닉네임을 알려주세요.");
  const [nickname] = useState("소현");
  // const room = prompt("입장할 방의 코드를 적어주세요.");
  const [room] = useState("123");

  console.log("나와라", nickname, room);

  if (!(nickname && room)) {
    alert("다시 입력해주세요.");
    window.location.reload();
  }

  // 📌
  socket.emit("ㅋㅋㅋ", nickname, room);

  socket.on("connect", () => {
    // 📌 누군가 채팅침
    socket.on(room, (data: any) => {
      $("#chatList").append(`<div>${data[0]} : ${data[1]}</div>`);
    });
    // 📌 누군가 입장
    socket.on("comeOn" + room, (comeOn: any) => {
      $("#chatList").append(`<div style="color:blue;">${comeOn}</div>`);
    });
  });

  // 📌 매세지 전송
  const msg_send = (event: any) => {
    const message = $("#msg").val();
    socket.emit("send", room, nickname, message);
    $("#msg").val("");
    $("#chatList").append(
      `<div style="color:red;">${nickname} : ${message}</div>`
    );
  };

  // const onChangeRoom = () => {};

  return (
    <>
      <Script
        src="https://code.jquery.com/jquery-3.6.0.js"
        integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
        crossOrigin="anonymous"
      ></Script>
      <Script src="http://34.64.156.215:3000/chattings/socket.io/socket.io.js"></Script>
      <Wrapper>
        <h1>
          시크릿 채팅방 <Span id="room"></Span>
        </h1>

        <div id="chatList"></div>
        <Div id="sendMessage">
          <input type="text" id="msg" />
          <button onClick={msg_send}>제출</button>
        </Div>
        {/* <input> 이름: </input>
        <input> 방번호: </input> */}
      </Wrapper>
    </>
  );
}
