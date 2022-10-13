import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const TextScroller = ({ duration, ...props}) => {
  const [key, setKey] = useState(1);

  const scrolling = useSpring({
    from: { transform: "translate(100%,0)" },
    to: { transform: "translate(-100%,0)" },
    config: { duration: duration },
    reset: true,
    //reverse: key % 2 == 0,
    onRest: () => {
      setKey(key + 1);
    }
  })

  return (
    <div key={key}>
      <animated.div style={scrolling}>{props.children}</animated.div>
    </div>
  );
};

export default TextScroller;
