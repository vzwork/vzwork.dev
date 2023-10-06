import "./OnViewLoading.css";
import React, { useEffect, useRef, useState } from "react";

export default function OnViewLoading(props) {
  const containerRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [children, setChildren] = useState(
    new Array(props.children.length).fill(false)
  );

  useEffect(() => {
    const container = containerRef.current;
    const childrenInner = container.children;
    const accepted = [];
    for (let i = 0; i < childrenInner.length; i++) {
      const child = childrenInner[i];
      const client = child.getBoundingClientRect();
      if (
        client.top >= window.innerHeight * 0.1 &&
        client.bottom <= window.innerHeight * 0.9
      ) {
        accepted.push(true);
      } else {
        accepted.push(false);
      }
    }
    setChildren(() => [...accepted]);
  }, [scrollY]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div ref={containerRef}>
      {props.children.map((val, idx) => {
        return (
          <div key={idx} className={`element ${children[idx] ? "" : "show"}`}>
            {val}
          </div>
        );
      })}
    </div>
  );
}
