import React from "react";

function UserGreeting(props) {
  const welcomeMessage = (
    <h2 className="green" style={{ background: "green" }}>
      Welcome {props.username}
    </h2>
  );

  const loginPrompt = (
    <h2 className="red" style={{ background: "red" }}>
      Please login to continue {props.username}
    </h2>
  );

  return <>{props.isLoggedIn ? welcomeMessage : loginPrompt}</>;
}

export default UserGreeting;
