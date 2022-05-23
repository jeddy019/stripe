import React from "react";
import ImageLinkForm from "./components/ImageLinkForm";
import Image from "./components/Image";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Signin from "./components/Signin";
import About from "./components/About";
import { useGlobalContext } from "./hooks/context";

function App() {
  const { route } = useGlobalContext();

  return (
    <>
      <Navbar />
      {route === "home" ? (
        <>
          <ImageLinkForm />
        </>
      ) : route === "signin" ? (
        <Signin />
      ) : route === "register" ? (
        <Register />
      ) : route === "image" ? (
        <Image />
      ) : (
        <About />
      )}
    </>
  );
}

export default App;
