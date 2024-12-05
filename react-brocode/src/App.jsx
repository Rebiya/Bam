import { useState } from "react";
import "./App.css";
import Header from "./components1/Header";
import Footer from "./components1/Footer";
import Food from "./components1/Food";
import Card from "./Components2/Card";
import Button from "./components3/Button";
import Student from "./components4/Student";
import UserGreeting from "./components5/UserGreeting";
import List from "./components6/List";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>my website with bro code</h1>
      {/*imports from component1
      <Header /> 
     <Footer />
     <Food /> */}
      {/* imports from Components2
      <Card /> */}
      {/* imports from components3
      <Button />*/}
      {/* imports from components4 
      <Student name="spongebob" age={20} isStudent={true} />
      <hr />
      <Student name="patric" age={22} isStudent={false} />
      <hr />
      <Student name="luv" age="6" isStudent={true} />
      */}
      {/* imports from components5
      <UserGreeting isLoggedIn={false} username="BroCode" />
      <UserGreeting isLoggedIn={true} username="BroCode" /> */}
      <List />
    </>
  );
}

export default App;
