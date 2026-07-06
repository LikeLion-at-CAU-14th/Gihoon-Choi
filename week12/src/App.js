import React from 'react'
import './App.css';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import BookList from './pages/BookList';
import Home from './pages/Home';
import BookDetail from './pages/BookDetail';
import Quiz from './pages/Quiz';
import Result from './pages/Result';

const App = () => {
  return (
    <AppDom>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/books" element={<BookList />}>
          <Route path=":id" element={<BookDetail />} />
        </Route>

        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </AppDom>
  )
}

export default App;

const AppDom = styled.div`
  display: flex;
  width: 100%;
  min-height: 95vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;