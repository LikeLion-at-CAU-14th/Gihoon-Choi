import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// [실습] QueryClient 인스턴스 생성하기
const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    {/* [실습] QueryClientProvider로 App 감싸기 */}
		  <App/>
    </QueryClientProvider>
  </StrictMode>,
);