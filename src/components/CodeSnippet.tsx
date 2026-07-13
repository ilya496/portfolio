import React from "react";

interface CodeSnippetProps {
  code: string;
  language: string;
  style?: React.CSSProperties;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ code, language, style }) => {
  const lines = code.trim().split("\n");

  return (
    <div style={{ position: "relative", ...style }}>
      <div
        style={{
          backgroundColor: "#333",
          color: "#fff",
          padding: "0.5em 1em",
          borderTopLeftRadius: "6px",
          borderTopRightRadius: "6px",
          fontFamily: "monospace",
          fontSize: "0.8em",
          textTransform: "uppercase",
        }}
      >
        {language}
      </div>
      <pre
        style={{
          display: "flex",
          margin: 0,
          borderRadius: "0 0 6px 6px",
          fontFamily: "'Courier New', Courier, monospace",
          fontSize: "0.9em",
          backgroundColor: "#f5f5f5",
        }}
      >
        <div
          style={{
            backgroundColor: "#eee",
            padding: "1em 0.5em",
            textAlign: "right",
            userSelect: "none",
            borderRight: "1px solid #ddd",
          }}
        >
          {lines.map((_, i) => (
            <div key={i}>{i + 1}</div>
          ))}
        </div>
        <code
          className={`language-${language}`}
          style={{
            padding: "1em",
            overflowX: "auto",
            whiteSpace: "pre",
            width: "100%",
          }}
        >
          {code}
        </code>
      </pre>
    </div>
  );
};

export default CodeSnippet;
