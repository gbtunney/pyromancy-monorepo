import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import GradientExamples from "./components/GradientExamples";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="bg-sky-700">Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div className="bg-indigo-200 fg-corn ">
        Click on the Vite and React logos to learn more
      </div>
      <div className="grainy-gradient bg-gradient-to-r from-lime-600 via-yellow-300 to-red-600">
        GRADIINT GRADIENT
      </div>
      <div className="p-8 text-center space-y-4">
        <h1 className="text-3xl font-bold text-red-500">Hello UnoCSS 🎉</h1>
        <button className="bg-blue-500 hover:bg-blue-600 text-red-600 px-4 py-2 rounded">
          Test Button
        </button>
        <div className="hover:(bg-orange-500 text-white) focus:(ring-2 ring-blue-300) p-4 border-2 border-red-500 cursor-pointer">
          Hover me to test variant groups!
        </div>
      </div>
      <button className="relative h-12 overflow-hidden rounded bg-neutral-950 px-5 py-2.5 text-white transition-all duration-300 hover:bg-neutral-800 hover:ring-2 hover:ring-neutral-800 hover:ring-offset-2">
        <span className="relative">Hover me</span>
      </button>
      <button className="fg-red-500">An unstyled button with fg-red-500</button>
      <button className="text-red-500">Same button with text-red-500</button>
      <div className="fg-blue-600 p-2">Testing fg-blue-600</div>
      <div className="bg-gordons-green fg-gordons-green  p-2">
        Testing custom color fg-gordons-green
      </div>
      <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-red-950 px-6 font-medium text-neutral-200 transition hover:scale-110">
        <span>Hover me</span>
        <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
          <div className="relative h-full w-8 bg-white/20"></div>
        </div>
      </button>
      <button className="bg-gradient-to-b from-red-500 to-gray-400 px-4 py-2 rounded text-white">
        TEST BUTTON HERE
      </button>
      <hr />
      <GradientExamples />
    </>
  );
}

export default App;
