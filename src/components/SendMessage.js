import { Button, Input } from "@material-ui/core"
import React, { useState } from "react"
import { auth, db } from "../firebase"
import { collection, addDoc } from "@firebase/firestore"

function SendMessage() {
  const [message, setMessage] = useState("")

  async function sendMessage(e) {
    e.preventDefault()
    const { uid, photoURL } = auth.currentUser

    await addDoc(collection(db, "messages"), {
      text: message,
      uid,
      photoURL,
      createdAt: new Date(),
    })
    setMessage("")
  }

  return (
    <div>
      <Input
        style={{
          width: "78%",
          fontSize: "15px",
          fontWeight: "550",
          marginLeft: "5px",
          marginBottom: "-3px",
        }}
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        placeholder="Message"
      ></Input>
      <Button
        style={{
          width: "18%",
          fontSize: "15px",
          fontWeight: "550",      
         
        }}
        onClick={sendMessage}
      >
        Send
      </Button>
    </div>
  )
}

export default SendMessage
