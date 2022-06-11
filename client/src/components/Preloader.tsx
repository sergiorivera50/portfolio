import React from "react"
import "../css/animations.css"

class Preloader extends React.Component {
  render() {
    return (
      <div className="preloader-dots fadeinAnimation duration4s delay3s">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    )
  }
}

export default Preloader
