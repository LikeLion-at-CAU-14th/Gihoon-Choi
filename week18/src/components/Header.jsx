import styled from 'styled-components';
import useCartStore from '../store/useCartStore';
import {useState} from 'react';
import CartPage from './CartPage';

function Header(){
    const cartCount=useCartStore((state) => state.cartItems.length);
    const [isCartOpen, setIsCartOpen]=useState(false);

    return (
        <Wrapper>
            <Logo>멋사 굿즈 스토어</Logo>
            <CartButton onClick={() => setIsCartOpen(true)}>
                장바구니<Badge>{cartCount}</Badge>
            </CartButton>

            {isCartOpen && (
                <Overlay onClick={() => setIsCartOpen(false)}>
                    <Modal onClick={(e) => e.stopPropagation()}>
                        <CloseButton onClick={() => setIsCartOpen(false)}>X</CloseButton>
                        <CartPage />
                    </Modal>
                </Overlay>
            )}
        </Wrapper>
    );
}

export default Header





const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid #f1f1f1;
  margin-bottom: 24px;
`;

const Logo = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #1a1a1a;
`;

const CartButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border-radius: 8px;
  border: 1px solid #f1f1f1;
  background: #fff;
  font-size: 14px;
  color: #1a1a1a;
  cursor: pointer;
`;

const Badge = styled.span`
  background: #ff6b35;
  color: #fff;
  font-size: 11px;
  padding: 2px 7px;
  border-radius: 999px;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

const Modal = styled.div`
  position: relative;
  background: #fff;
  border-radius: 12px;
  padding: 24px;
  width: 360px;
  max-height: 480px;
  overflow-y: auto;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  border: none;
  background: none;
  font-size: 16px;
  cursor: pointer;
  color: #666;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
`;