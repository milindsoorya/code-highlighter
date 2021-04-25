import hljs from "highlight.js";
import { useEffect, useRef } from "react";
import "highlight.js/styles/foundation.css";

export default function CodeHighlighter({ children }) {
  const preRef = useRef(null);

  useEffect(() => {
    hljs.highlightElement(preRef.current);
  }, []);

  return (
    <pre
      ref={preRef}
      className="bg-gray-900 rounded max-w-full text-white font-mono text-base p-2 md:p-4"
    >
      <code className="break-words whitespace-pre-wrap">{children}</code>
    </pre>
  );
}
