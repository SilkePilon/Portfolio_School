"use client";
import { useState } from "react";
import Cookie from "./components/Cookie";

export default function Home() {
  const[count, setCount] = useState(0);
  
  return (
    <Cookie/>
  );
}


