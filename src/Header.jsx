import { Link } from "react-router-dom";
import { useState } from "react";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  const [isSignupVisible, setIsSignupVisible] = useState(false);

  const handleSignupShow = () => {
    setIsSignupVisible(false);
  };

  const handleSignupClose = () => {
    setIsSignupVisible(false);
  };

  return (
    <header>
      <nav>
        <Link to="/">Home</Link> |<Link to="/hikes">All hikes</Link>| <Link to="/hikesnew">Log a Hike</Link> |
        {localStorage.jwt === undefined ? (
          <>
            <a href="/signup"> Signup |</a>
            <a href="/login"> Login </a>
          </>
        ) : (
          <LogoutLink />
        )}
      </nav>
    </header>
  );
}
