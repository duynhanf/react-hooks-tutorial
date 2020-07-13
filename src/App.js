import React from "react";
import "./App.css";
// import LoginForm from "./components/LoginForm/LoginForm";
import AwesomeImage from "./components/AwesomeImage/AwesomeImage";
import withHoverOpacity from "./hocs/withHoverOpacity";
import Avatar from "./components/Avatar/Avatar";

function App() {
  const AwesomeImageWithOpacity = withHoverOpacity(AwesomeImage, 0.3);
  const AvatarWithOpacity = withHoverOpacity(Avatar, 0.8);
  return (
    <div className="App">
      {/* <LoginForm /> */}
      <AwesomeImage src="https://i.picsum.photos/id/290/200/300.jpg?hmac=kjRyFwJ6i5kuROjzxcs6QbXbBr8EptbH5AuVxtMxhQ0" />

      <br />
      <AwesomeImageWithOpacity src="https://i.picsum.photos/id/290/200/300.jpg?hmac=kjRyFwJ6i5kuROjzxcs6QbXbBr8EptbH5AuVxtMxhQ0" />
      <br />
      <AvatarWithOpacity src="https://i.picsum.photos/id/290/200/300.jpg?hmac=kjRyFwJ6i5kuROjzxcs6QbXbBr8EptbH5AuVxtMxhQ0" />
    </div>
  );
}

export default App;
