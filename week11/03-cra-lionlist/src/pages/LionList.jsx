import { useState } from 'react';
import styled from 'styled-components';
import { lionData } from '../data/lionData';
import LionCard from '../components/LionCard';
import FilterBar from '../components/FilterBar';

const LionList = () => {

    const [filter, setFilter]     = useState('all');
    const [curPage, setCurPage]   = useState(1);

    const PER_PAGE = 5; // 한 페이지에 보여줄 멤버 수


    const filteredData = filter === 'all'
        ? lionData
        : lionData.filter((lion) => lion.part === filter);

    const totalPages    = Math.ceil(filteredData.length / PER_PAGE);
    const offset        = (curPage - 1) * PER_PAGE;
    const displayedData = filteredData.slice(offset, offset + PER_PAGE);

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
        setCurPage(1); // 필터 변경 시 항상 1페이지로!
    };

    return (
        <PageLayout>

            {/* 제목 */}
            <Title>🦁 아기사자 리스트 🦁</Title>

            <ContentBox>

                {/* ===== 필터 버튼 ===== */}
                <FilterBar
                    filter={filter}
                    setFilter={handleFilterChange}
                />

                {/* ===== 카드 그리드 ===== */}
                <CardGrid>
                    {displayedData.map((lion) => (
                        <LionCard key={lion.id} data={lion} />
                    ))}
                </CardGrid>

                {/* ===== 페이지네이션 ===== */}
                <Pagination>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <PageBtn
                            key={page}
                            $active={page === curPage}
                            onClick={() => setCurPage(page)}
                        >
                            {page}
                        </PageBtn>
                    ))}
                </Pagination>

            </ContentBox>
        </PageLayout>
    );
};

export default LionList;

const PageLayout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    background-color: #fff8f3;
    padding: 40px 20px;
`;

const Title = styled.h1`
    font-size: 32px;
    font-weight: 800;
    color: #1a1a1a;
    margin-bottom: 32px;
    letter-spacing: -1px;
`;

const ContentBox = styled.div`
    width: 100%;
    max-width: 860px;
    background: white;
    border-radius: 24px;
    padding: 32px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
    border: 3px solid #FF7100;
`;

const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin-bottom: 28px;

    @media (max-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const Pagination = styled.div`
    display: flex;
    justify-content: center;
    gap: 12px;
`;

const PageBtn = styled.button`
    width: 42px;
    height: 42px;
    border-radius: 50%;
    border: 2px solid ${(props) => props.$active ? '#FF7100' : '#ddd'};
    background-color: ${(props) => props.$active ? '#FF7100' : 'white'};
    color: ${(props) => props.$active ? 'white' : '#999'};
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        border-color: #FF7100;
        color: ${(props) => props.$active ? 'white' : '#FF7100'};
    }
`;
