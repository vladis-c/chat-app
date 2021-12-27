import "./App.css"
import SignIn from "./components/SignIn"
import { auth } from "./firebase.js"
import { useAuthState } from "react-firebase-hooks/auth"
import Chat from "./components/Chat"

function App() {
  const [user] = useAuthState(auth)
  return <>{user ? <Chat /> : <SignIn />}</>
}

export default App
