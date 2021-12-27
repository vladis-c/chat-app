import {
  collection,
  setDoc,
  doc,
  query,
  orderBy,
  limit,
  onSnapshot,
} from "@firebase/firestore"
import { Button } from "@material-ui/core"
import React, { useEffect, useRef, useState } from "react"
import { auth, db } from "../firebase"
import LogOut from "./LogOut"
import SendMessage from "./SendMessage"

function Chat() {
  const scroll = useRef()
  const [messages, setMessages] = useState([])

  useEffect(() => readAllMessages(), [])

  function readAllMessages() {
    const queryForAllMessages = query(
      collection(db, "messages"),
      orderBy("createdAt"),
      limit(10)
    )
    onSnapshot(queryForAllMessages, (querySnapshot) => {
      setMessages(querySnapshot.docs.map((e) => e.data()))
    })
  }

  return (
    <div>
      <LogOut />

      <div className="msgs">
        {messages.map(({ id, text, photoURL, uid }) => (
          <div>
            <div
              key={id}
              className={`msg ${
                uid === auth.currentUser.uid ? "sent" : "received"
              }`}
            >
              <img src={photoURL} alt="" />
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
      <SendMessage scroll={scroll} />
      <div ref={scroll}></div>
    </div>
  )
}

export default Chat
