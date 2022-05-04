import React from "react";
import { useGlobalContext } from "./Context";
import { FaBars } from "react-icons/fa";

function Home() {
  const { openSidebar, openModal } = useGlobalContext();

  return (
    <main>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <button className="btn" onClick={openModal}>
        show modal
      </button>
    </main>
  );
}

export default Home;
