import React, { useState, useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/global.css'
import LoadingScreen from './components/LoadingScreen';
import Dashboard from "./components/Dashboard";

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 7000)
  })

  return (
    <>
      { loading ? (
        <LoadingScreen />
      ) : (
        <Dashboard />
      )}
    </>
  );
}

export default App;
