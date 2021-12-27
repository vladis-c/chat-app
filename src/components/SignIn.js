import { signInWithPopup } from "@firebase/auth"
import { Button } from "@material-ui/core"
import { auth, provider } from "../firebase.js"

function SignIn() {
  function signInWithGoogle() {
    signInWithPopup(auth, provider)
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <Button
        style={{
          padding: "30px",
          fontSize: "20px",
          borderRadius: "0",
          fontWeight: "600",
        }}
        onClick={signInWithGoogle}
      >
        Sign In With Google
      </Button>
    </div>
  )
}

export default SignIn
