import styled from 'styled-components';

interface StatsProps {
  total: number;
  completed: number;
}

export default function TodoStats({ total, completed }: StatsProps) {
  return (
    <Box>
      <Item>
        전체 <span>{total}</span>
      </Item>
      <Item>
        완료 <span>{completed}</span>
      </Item>
    </Box>
  );
}

const Box = styled.div`
  display: flex;
  gap: 32px;
  padding: 20px 24px;
  background: #fafafa;
  border: 1px solid #ededed;
  border-radius: 12px;
  margin-bottom: 24px;
`;

const Item = styled.div`
  font-size: 16px;
  color: #555;

  span {
    font-size: 18px;
    font-weight: 700;
    color: #ff6b35;
    margin-left: 8px;
  }
`;