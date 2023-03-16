import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>{" "}
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   );
// }


const App = () => {
  const [value, setvalue] = useState([]);
  const api = async () => {
    let response = await fetch(
      "https://newsapi.org/v2/everything?q=android&apiKey=64ea599021d84befbf7e0cd2896d116f"
    );
    let result = await response.json();
    console.log(result);
    console.log(result.articles);
    setvalue(result.articles);
  };
  useEffect(() => {
    api();
  }, []);

  return (
    <>
      <div className="grid gap-2 lg:grid-cols-4">
        {value.map((a, key) => (
          <div className="w-full rounded-lg shadow-md lg:max-w-sm" key={key}>
            <img
              className="object-cover w-full h-48"
              src={a.urlToImage}
              alt="image"
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-blue-600">{a.title}</h4>
              <p className="mb-2 leading-normal">{a.content}</p>
              <a
                href={a.url}
                className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow"
              >
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
