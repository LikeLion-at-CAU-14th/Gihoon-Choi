
import { useState, useRef, useEffect } from "react";
import "./App.css";

// KBO 구단 목록
const teams = [
  "삼성 라이온즈",
  "LG 트윈스",
  "KIA 타이거즈",
  "두산 베어스",
  "KT 위즈",
  "SSG 랜더스",
  "롯데 자이언츠",
  "한화 이글스",
  "NC 다이노스",
  "키움 히어로즈",
];

const suggestions = [
  {
    icon: "📖",
    title: "야구 규칙",
    question: "야구의 스트라이크와 볼의 차이를 쉽게 설명해 줘.",
  },
  {
    icon: "📊",
    title: "야구 기록",
    question: "타자의 OPS가 무엇인지 예시와 함께 설명해 줘.",
  },
  {
    icon: "⚾",
    title: "야구 전략",
    question: "무사 1루 상황에서 희생번트와 강공의 차이를 설명해 줘.",
  },
  {
    icon: "🦁",
    title: "삼성 라이온즈",
    question: "삼성 라이온즈의 역사와 대표적인 특징을 소개해 줘.",
  },
];

const initialMessage = {
  role: "assistant",
  text: "안녕하세요! ⚾\n야구를 더 재미있게 즐길 수 있도록 도와주는 Baseball AI입니다.\n\n야구 규칙부터 선수 기록, 경기 전략까지 무엇이든 물어보세요!\n\n오늘도 야구와 함께 즐거운 하루 보내세요! 🦁",
  time: "WELCOME",
};

function App() {
  const [input, setInput] = useState("");
  const [selectedTeam, setSelectedTeam] = useState("삼성 라이온즈");
  const [messages, setMessages] = useState([initialMessage]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const chatBodyRef = useRef(null);
  const inputRef = useRef(null);

  // 새 메시지가 추가되면 채팅창을 아래로 이동
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({
        top: chatBodyRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, loading]);

  // 시간 표시
  const getCurrentTime = () => {
    return new Date().toLocaleTimeString("ko-KR", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Gemini API 직접 호출
  const sendMessage = async (customMessage) => {
    const userMessage = (customMessage ?? input).trim();

    if (!userMessage || loading) return;

    const newUserMessage = {
      role: "user",
      text: userMessage,
      time: getCurrentTime(),
    };

    // 기존 대화에 사용자 메시지 추가
    const updatedMessages = [...messages, newUserMessage];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);
    setError("");

    try {
      // 1. 환경변수에서 API Key 가져오기
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

      if (!apiKey) {
        throw new Error(
          "API Key를 찾을 수 없습니다. .env 파일을 확인해 주세요."
        );
      }

      // 2. 사용할 Gemini 모델 지정
      const model = "gemini-3.5-flash-lite";

      // 3. API 요청 URL 생성
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

      // 4. 이전 대화 내용을 Gemini API 형식으로 변환
      const conversationHistory = updatedMessages
        .filter((message) => message.time !== "WELCOME")
        .map((message) => ({
          role: message.role === "user" ? "user" : "model",
          parts: [{ text: message.text }],
        }));

      // 5. Request Body 생성
      const requestBody = {
        systemInstruction: {
          parts: [
            {
              text: `
                너는 Baseball AI라는 이름의 친절한 야구 전문 AI 챗봇이다.

                주요 역할:
                1. KBO와 야구 규칙을 쉽고 정확하게 설명한다.
                2. 야구 기록(AVG, ERA, OPS, WHIP 등)을 설명한다.
                3. 야구 전술과 경기 상황을 분석한다.
                4. 야구를 처음 접하는 사람도 이해할 수 있도록 답변한다.
                5. 사용자가 선택한 응원팀은 ${selectedTeam}이다.
                6. 해당 팀에 관한 질문에는 관련 내용을 중심으로 답변한다.

                답변 원칙:
                - 친절하고 자연스러운 한국어를 사용한다.
                - 어려운 야구 용어는 쉽게 풀어서 설명한다.
                - 적절한 이모지를 사용해 가독성을 높인다.
                - 확인되지 않은 경기 결과나 선수 기록을 사실처럼 말하지 않는다.
                - 실시간 경기 정보가 필요하면 실시간 데이터에 접근할 수 없다는 점을 알린다.
                - 질문과 관련 없는 내용을 길게 설명하지 않는다.
              `,
            },
          ],
        },
        contents: conversationHistory,
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 2048,
        },
      };

      // 6. Request 정보 확인
      console.log("========== GEMINI API REQUEST ==========");
      console.log("REQUEST URL:", url.replace(apiKey, "HIDDEN_API_KEY"));
      console.log("REQUEST METHOD: POST");
      console.log("REQUEST HEADERS:", {
        "Content-Type": "application/json",
      });
      console.log("REQUEST BODY:", requestBody);

      // 7. fetch()를 이용해 API에 요청 전송
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      // 8. Response JSON 변환
      const data = await response.json();

      console.log("========== GEMINI API RESPONSE ==========");
      console.log("HTTP STATUS:", response.status);
      console.log("RESPONSE OK:", response.ok);
      console.log("RESPONSE DATA:", data);

      // 9. HTTP 오류 처리
      if (!response.ok) {
        throw new Error(
          data?.error?.message ||
            `API 요청 실패 (HTTP ${response.status})`
        );
      }

      // 10. AI 응답 텍스트 추출
      const aiText =
        data?.candidates?.[0]?.content?.parts
          ?.map((part) => part.text)
          .filter(Boolean)
          .join("\n") || "AI 응답을 가져오지 못했습니다.";

      // 11. AI 응답을 채팅창에 추가
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: aiText,
          time: getCurrentTime(),
        },
      ]);
    } catch (error) {
      console.error("Gemini API Error:", error);

      const errorMessage = error.message || "알 수 없는 오류가 발생했습니다.";

      setError(errorMessage);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: `죄송합니다. 응답을 생성하지 못했습니다.\n\n오류 내용: ${errorMessage}`,
          time: getCurrentTime(),
          isError: true,
        },
      ]);
    } finally {
      // 성공과 실패에 관계없이 로딩 종료
      setLoading(false);
      inputRef.current?.focus();
    }
  };

  // Enter 전송 / Shift + Enter 줄바꿈
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // 새로운 대화 시작
  const resetChat = () => {
    if (loading) return;

    setMessages([initialMessage]);
    setInput("");
    setError("");
    inputRef.current?.focus();
  };

  return (
    <div className="app">
      <div className="stadium-glow glow-one" />
      <div className="stadium-glow glow-two" />

      <div className="chat-container">
        {/* Header */}
        <header className="chat-header">
          <div className="brand">
            <div className="brand-logo">⚾</div>

            <div className="brand-info">
              <h1>BASEBALL AI</h1>
              <p>YOUR PERSONAL BASEBALL COMPANION</p>
            </div>
          </div>

          <div className="header-actions">
            <div className="online-status">
              <span className="online-dot" />
              ONLINE
            </div>

            <button
              className="reset-button"
              onClick={resetChat}
              disabled={loading}
              title="새로운 대화"
            >
              ↻ <span>새 대화</span>
            </button>
          </div>
        </header>

        {/* Team Selection */}
        <section className="team-section">
          <div className="team-label">
            <span>🏟️</span>
            <span>MY FAVORITE TEAM</span>
          </div>

          <select
            className="team-select"
            value={selectedTeam}
            onChange={(e) => setSelectedTeam(e.target.value)}
            disabled={loading}
          >
            {teams.map((team) => (
              <option key={team} value={team}>
                {team}
              </option>
            ))}
          </select>
        </section>

        {/* Chat Body */}
        <main className="chat-body" ref={chatBodyRef}>
          <div className="chat-date">
            <span>PLAY BALL!</span>
          </div>

          {/* Welcome Banner */}
          {messages.length === 1 && (
            <section className="welcome-banner">
              <div className="welcome-decoration">⚾</div>

              <div className="welcome-content">
                <span className="welcome-tag">BASEBALL KNOWLEDGE PARTNER</span>
                <h2>야구의 모든 순간을<br />더 재미있게!</h2>
                <p>
                  규칙, 기록, 전략까지.
                  <br />
                  궁금한 야구 이야기를 자유롭게 물어보세요.
                </p>
              </div>

              <div className="welcome-bottom">
                <span>EST. 2026</span>
                <span>LET'S PLAY BALL!</span>
              </div>
            </section>
          )}

          {/* Suggested Questions */}
          {messages.length === 1 && (
            <section className="suggestions">
              <div className="section-heading">
                <span className="heading-line" />
                <h3>QUICK QUESTIONS</h3>
                <span className="heading-line" />
              </div>

              <div className="suggestion-grid">
                {suggestions.map((item) => (
                  <button
                    className="suggestion-card"
                    key={item.title}
                    onClick={() => sendMessage(item.question)}
                    disabled={loading}
                  >
                    <span className="suggestion-icon">{item.icon}</span>
                    <span className="suggestion-title">{item.title}</span>
                    <span className="suggestion-arrow">↗</span>
                  </button>
                ))}
              </div>
            </section>
          )}

          {/* Messages */}
          <div className="message-list">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`message-row ${
                  message.role === "user" ? "user-row" : "assistant-row"
                }`}
              >
                {message.role === "assistant" && (
                  <div className="avatar">⚾</div>
                )}

                <div className="message-content">
                  <div className="message-name">
                    {message.role === "user" ? "YOU" : "BASEBALL AI"}
                  </div>

                  <div
                    className={`message ${
                      message.role === "user"
                        ? "user-message"
                        : "assistant-message"
                    } ${message.isError ? "error-message" : ""}`}
                  >
                    {message.text}
                  </div>

                  <span className="message-time">
                    {message.time === "WELCOME" ? "" : message.time}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Loading */}
          {loading && (
            <div className="message-row assistant-row">
              <div className="avatar">⚾</div>

              <div className="message-content">
                <div className="message-name">BASEBALL AI</div>

                <div className="message assistant-message loading-message">
                  <span />
                  <span />
                  <span />
                  <small>야구 이야기를 생각하고 있어요...</small>
                </div>
              </div>
            </div>
          )}
        </main>

        {/* Input */}
        <footer className="chat-footer">
          {error && (
            <div className="error-notice">
              <span>!</span>
              마지막 요청에서 오류가 발생했습니다. 위 메시지를 확인해 주세요.
            </div>
          )}

          <div className="input-container">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="야구에 관해 무엇이든 물어보세요..."
              rows={1}
              disabled={loading}
            />

            <button
              className="send-button"
              onClick={() => sendMessage()}
              disabled={!input.trim() || loading}
            >
              {loading ? "..." : "➤"}
            </button>
          </div>

          <div className="footer-info">
            <span>⚾ BASEBALL AI · POWERED BY GEMINI</span>
            <span>ENTER TO SEND · SHIFT + ENTER FOR NEW LINE</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
