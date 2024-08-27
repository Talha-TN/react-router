
import Footer from "../src/components/Footer.jsx"
import Header from "../src/components/Header.jsx"
import RouterCom from "./routes/RouterCom.jsx"
import './App.css'

function App() {
  return (
    <>
    <Header/>
    <main className="min-h-[69vh]">
     <RouterCom/>
    </main>
  <Footer/>
    </>
  )
}

export default App
