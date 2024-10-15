import React from "react";
import { Users } from "./components/Users";
import { Books } from "./components/Books";

function App() {
  return (
    <div className="flex w-full h-screen bg-black text-white px-16 items-center justify-center">
      <div className="flex gap-4">
        <Users />
        <Books />
      </div>
    </div>
  );
}

export default App;
