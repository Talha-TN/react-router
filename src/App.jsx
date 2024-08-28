import {Footer,Header} from "../src/components/index.jsx";
import RouterCom from "./routes/RouterCom.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main className="min-h-[69vh]">
        <RouterCom />
      </main>
      <Footer />
    </>
  );
}

export default App;
