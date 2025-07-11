import { useState } from "react";

function App() {
  const [count, setcount] = useState(0);

  function handleDecrement() {
    if (count > 0) {
      setcount(count - 1);
    }
  }

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-[#281f48] p-4 rounded-lg w-80 h-60">
          <h1 className="text-3xl font-bold text-white text-center mb-4">
            Counter App
          </h1>

          {/* + and - buttons */}
          <div className="flex justify-center mb-2">
            <button
              className="bg-[#281f48] text-white px-5 py-1 rounded-lg hover:bg-[#322756] transition duration-300 border border-white mr-2.5"
              onClick={() => setcount(count + 1)}
            >
              +
            </button>
            <button
              className="bg-[#281f48] text-white px-5 py-1 rounded-lg hover:bg-[#322756] transition duration-300 border border-white ml-2.5"
              onClick={handleDecrement}
            >
              -
            </button>
          </div>

          <button
            className="bg-[#281f48] text-white px-6 py-1 rounded-lg hover:bg-[#322756] transition duration-300 border border-2-white mt-3 ml-24"
            onClick={() => setcount(0)}
          >
            Reset
          </button>

          <p className="text-white mt-3 ml-20">Count : {count} </p>
          
          {count >= 10 && (
            <p className="text-green-400 text-center mt-2 font-semibold">
              🎉 Congratulations! You reached 10 🎉
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
