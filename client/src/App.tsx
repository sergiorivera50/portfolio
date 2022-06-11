import React, { useState, useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/global.css'
import "./css/animations.css"
import LoadingScreen from './components/LoadingScreen';
import Dashboard from "./components/Dashboard";

function App() {
  const [loading, setLoading] = useState(true) // useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 7000)
  })

  return (
    <>
      { loading ? (
        <LoadingScreen />
      ) : (
        <div className="fadeinAnimation duration2s delay0p5s">
          <Dashboard />
        </div>
      )}
    </>
  );
}

export default App;
