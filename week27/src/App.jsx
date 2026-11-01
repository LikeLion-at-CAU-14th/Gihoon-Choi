import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "안녕하세요! 무엇이든 물어보세요 👋",
    },
  ]);

  const [loading, setLoading] = useState(false);

  const sendMessage = async () => { // 비동기 함수 선언
    if (!input.trim() || loading) return;

    const userMessage = input.trim();

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: userMessage,
      },
    ]);

    setInput("");
    setLoading(true);

    try {
      // 1. 환경변수(.env)에서 Gemini API Key 가져오기
      // API Key는 .env 파일에 VITE_GEMINI_API_KEY로 저장되어 있어야 함

      // ===== TODO 1: API Key 가져오기 =====
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      // ======================================


      // 2. 사용할 Gemini AI 모델 지정
      const model = "gemini-3.6-flash";

      // API Key가 존재하지 않으면 오류 발생
      if (!apiKey) {
        throw new Error(
          "API Key를 찾을 수 없습니다. .env 파일을 확인해주세요."
        );
      }


      // 3. Gemini API 요청 URL 생성
      // 모델명과 API Key를 이용해 요청할 주소를 구성
      // ===== TODO 2: API 요청 URL 생성 =====
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;


      // ======================================

      console.log("REQUEST MODEL:", model);


      // 4. fetch()를 이용해 Gemini API에 요청 보내기
      // await: 비동기 작업이 완료될 때까지 기다린 후 결과를 받음

      // ===== TODO 3: Gemini API 호출 =====
      // fetch(), POST, headers, body 작성
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [{ role: "user", parts:[{text: userMessage}] }],
        }),
      });

      // ======================================


      // 6. Gemini API에서 받은 응답을 JSON 객체로 변환
      const data = await response.json();

      console.log("HTTP STATUS:", response.status);
      console.log("Gemini Response:", data);

      // 7. API 요청이 실패한 경우 오류 처리
      // HTTP 상태 코드가 정상 범위(200~299)가 아니면 오류 발생
      if (!response.ok) {
        throw new Error(
          data?.error?.message ||
            `Gemini API 요청에 실패했습니다. (${response.status})`
        );
      }


      // 8. API 응답에서 AI가 생성한 텍스트 추출
      // candidates: AI가 생성한 응답 후보
      // content.parts: 응답을 구성하는 여러 데이터
      // map(): 각 데이터에서 텍스트만 추출
      // filter(Boolean): 비어 있는 텍스트 제거
      // join("\n"): 여러 텍스트를 줄바꿈으로 연결

      // ===== TODO 4: AI 응답 텍스트 추출 =====
      const aiText = data?.candidates[0]?.content?.parts
        ?.map((part) => part.text)
        .filter(Boolean)
        .join("\n")||"AI 응답이 없습니다.";

      // ======================================


      // 9. AI 응답을 messages 배열에 추가
      // React 상태가 변경되면서 채팅 화면에 AI 메시지가 표시됨
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: aiText,
        },
      ]);

    } catch (error) {
      // 10. API 호출 과정에서 오류가 발생하면 실행
      // 오류 내용을 콘솔에 출력
      console.error("Gemini API Error:", error);

      // 사용자에게 오류 메시지 표시
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: `오류가 발생했습니다.\n${error.message}`,
        },
      ]);

    } finally {
      // 11. API 요청 성공 여부와 관계없이 로딩 상태 종료
      setLoading(false);
    }
  };


  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="app">
      <div className="chat-container">

        <header className="chat-header">
          <div>
            <h1>Likelion CAU Chatbot 🦁</h1>
            <p>week27 AI API 실습</p>
          </div>

          <div className="status">
            <span />
            Online
          </div>
        </header>

        <main className="chat-body">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message-row ${
                message.role === "user"
                  ? "user-row"
                  : "assistant-row"
              }`}
            >
              {message.role === "assistant" && (
                <div className="avatar">
                  멋사AI
                </div>
              )}

              <div
                className={`message ${
                  message.role === "user"
                    ? "user-message"
                    : "assistant-message"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}

          {loading && (
            <div className="message-row assistant-row">
              <div className="avatar">
                멋사AI
              </div>

              <div className="message assistant-message loading-message">
                <span />
                <span />
                <span />
              </div>
            </div>
          )}
        </main>

        <div className="chat-input-area">
          <textarea
            value={input}
            onChange={(e) =>
              setInput(e.target.value)
            }
            onKeyDown={handleKeyDown}
            placeholder="메시지를 입력하세요..."
            rows={1}
          />

          <button
            onClick={sendMessage}
            disabled={!input.trim() || loading}
          >
            {loading ? "전송 중..." : "보내기"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;