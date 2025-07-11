import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [color, setcolor] = useState("#D3D3D3");
  return (
    <div className="w-full h-screen " style={{ background: color }}>
      <div className="w-[600px] h-[55px] bg-white rounded-[16px] border-none absolute bottom-8.5 left-1/2 transform -translate-x-1/2 flex items-center justify-center gap-2">

        <Button setcolor={setcolor} label="Blue" color="#87CEEB"/>
        <Button setcolor={setcolor} label="Green" color="#98FF98"/>
        <Button setcolor={setcolor} label="Coral" color="#F08080"/>
        <Button setcolor={setcolor} label="Lavender" color="#E6E6FA"/>
        <Button setcolor={setcolor} label="Peach" color="#FFDAB9"/>
        <Button setcolor={setcolor} label="Goldenrod"color="#EEE8AA" />
      </div>
    </div>
  );
}

export default App;
