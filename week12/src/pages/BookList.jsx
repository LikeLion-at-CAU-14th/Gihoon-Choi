import React, { use, useState, useEffect } from 'react'
import BookDetail from './BookDetail';
import styled from 'styled-components';
import { Link, Outlet,useNavigate } from 'react-router-dom';
import axios from 'axios';



const BookList = () => {
    //books:책 목록 상태 변수 (초기값 빈 배열),setBooks로 값 변경 시 화면 자동 재렌더링
    const [books, setBooks] = useState([]);

    //useNavigate:훅으로 페이지 이동 함수 가져오기
    const navigate = useNavigate();
    //홈으로 이동하는 함수-Title 클릭시 호출됨
    const goHome = () => {
        navigate('/');
    }
    //[실습 18] useEffect로 렌더링 될 때 한 번만 데이터 가져오기
    //[실습 17] public/databases/books.json에 저장한 데이터를 axios로 불러오기
    useEffect(() => {
        const fecthBooks = async () => {
            const response=await axios.get("/databases/books.json");
            setBooks(response.data);
        }
        fecthBooks();
    },[])
  return (
    <MenuDom>
        <BookListDom>
            <Title onClick={goHome}>Home</Title>
            <title>Book List</title>
            <ul>
                {/* [실습 12]id와 매치되는 책 정보 링크로 연결 */}
                {books.map((book) => (
                    <Link key={book.id} to={`/books/${book.id}`}>
                        <li>{book.title}</li>
                    </Link>
                ))}
            </ul>
        </BookListDom>
        <BookDetailDom>
            <Outlet/>
        </BookDetailDom>
    </MenuDom>
  )
}

export default BookList


const MenuDom = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 80vh;
  margin: 20px;
`;

const Title = styled.div`
  font-size: 40px;
  color: #535353;
  font-weight: 700;
`;

const BookListDom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  background-color: white;
  padding: 50px;
  height: 80%;
  border-radius: 0 10px 10px 0;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
`;

const BookDetailDom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 50px;
  height: 100%;
  border-radius: 0 10px 10px 0;
  margin-top: 100px;
`;