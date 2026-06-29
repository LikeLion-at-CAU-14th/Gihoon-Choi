import styled from 'styled-components';

const FILTER_LIST = [
    { label: '🦁 전체', value: 'all' },
    { label: '💻 프론트엔드', value: 'frontend' },
    { label: '⚙️ 백엔드', value: 'backend' },
    { label: '🎨 기획디자인', value: 'design' },
];

const FilterBar = ({ filter, setFilter }) => {
    return (
        <FilterLayout>
            {FILTER_LIST.map((item) => (
                <FilterBtn
                    key={item.value}
                    $active={filter === item.value}
                    onClick={() => setFilter(item.value)}
                >
                    {item.label}
                </FilterBtn>
            ))}
        </FilterLayout>
    );
};

export default FilterBar;

const FilterLayout = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 24px;
`;

const FilterBtn = styled.button`
    padding: 9px 24px;
    border: 2px solid ${(props) => props.$active ? '#FF7100' : '#ddd'};
    background-color: ${(props) => props.$active ? '#FF7100' : 'white'};
    color: ${(props) => props.$active ? 'white' : '#666'};
    border-radius: 20px;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        border-color: #FF7100;
        color: ${(props) => props.$active ? 'white' : '#FF7100'};
    }
`;