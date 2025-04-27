import React, { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import "./LandingChat.css";

export default function LandingChat() {
  // hard-coded creds:
  const endpoint   = "https://csihackthon0010263141955.openai.azure.com";
  const deployment = "gpt-4o-mini-2";
  const apiKey     = "9LWyHVIUHSxgLFaikcWI8vmLLOd2E1MlzLG3jk9lAHfzhpOWgltgJQQJ99BDACHYHv6XJ3w3AAAAACOGQRfe";
  const apiVer     = "2025-02-01-preview";

  const [messages, setMessages] = useState([
    { from: "agent", text: "Welcome to Hackathon Builder Master Agent!" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const send = async () => {
    if (!input.trim() || isLoading) return;

    // 1) add user message
    setMessages((msgs) => [...msgs, { from: "user", text: input }]);
    const userMessage = input;
    setInput("");

    // show typing indicator
    setIsLoading(true);

    const payload = {
      messages: [
        { role: "system", content: "You are an agent generator. Follow instructions precisely." },
        { role: "user",   content: userMessage }
      ]
    };

    try {
      const res = await fetch(
        `${endpoint}/openai/deployments/${deployment}/chat/completions?api-version=${apiVer}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "api-key": apiKey
          },
          body: JSON.stringify(payload)
        }
      );
      const data = await res.json();
      const reply = data.choices?.[0]?.message?.content ?? "⚠️ No reply.";

      setMessages((msgs) => [...msgs, { from: "agent", text: reply }]);
    } catch (err) {
      console.error(err);
      setMessages((msgs) => [
        ...msgs,
        { from: "agent", text: "⚠️ Error contacting Azure OpenAI." }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <div className="chat-container">
      <header className="chat-header">Hackathon Builder Master Agent</header>
      <div className="chat-window">
        {messages.map((msg, i) => (
          <div key={i} className={`chat-message ${msg.from}`}>
            <ReactMarkdown>{msg.text}</ReactMarkdown>
          </div>
        ))}
        {isLoading && (
          <div className="chat-message agent typing">
            <em>Master Agent is typing</em><span className="dot-anim">...</span>
          </div>
        )}
        <div ref={bottomRef} />
      </div>
      <footer className="chat-footer">
        <textarea
          className="chat-input"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          disabled={isLoading}
        />
        <button
          className="chat-send"
          onClick={send}
          disabled={isLoading}
        >
          {isLoading ? "Sending…" : "Send"}
        </button>
      </footer>
    </div>
  );
}
