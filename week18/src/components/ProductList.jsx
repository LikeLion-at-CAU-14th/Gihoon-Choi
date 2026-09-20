import styled from 'styled-components';
import useCartStore from '../store/useCartStore';

const products = [
  { id: 1, name: '멋사 키링', price: 8000 },
  { id: 2, name: '멋사 스티커', price: 3000 },
  { id: 3, name: '멋사 에코백', price: 13000 },
];

function ProductList() {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <Grid>
      {products.map((product) => (
        <Card key={product.id}>
          <ImagePlaceholder />

          <Name>{product.name}</Name>

          <Price>
            {product.price.toLocaleString()}원
          </Price>

          <AddButton onClick={() => addToCart(product)}>
            담기
          </AddButton>
        </Card>
      ))}
    </Grid>
  );
}

export default ProductList;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  border: 1px solid #f1f1f1;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

const ImagePlaceholder = styled.div`
  height: 140px;
  background: #f0f0f0;
  border-radius: 8px;
  margin-bottom: 12px;
`;

const Name = styled.p`
  font-size: 14px;
  color: #1a1a1a;
  margin-bottom: 4px;
`;

const Price = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 12px;
`;

const AddButton = styled.button`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ff6b35;
  background: #ff6b35;
  color: #fff;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background: #e85a2a;
  }
`;