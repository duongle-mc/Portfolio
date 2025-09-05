import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import "../components/CSS/style.css";

export default function AutoTypeText() {
  const el = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "software engineer passionate about <span class='dotnet'>.NET Framework</span>"
      ],
      typeSpeed: 80,
      backSpeed: 60,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => typed.destroy();
  }, []);

  return (
    <div className="auto-type-wrapper">
      <h2 className="auto-type" ref={el} />
    </div>
  );
}
