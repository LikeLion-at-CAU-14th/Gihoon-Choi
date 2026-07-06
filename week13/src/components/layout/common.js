import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 16px;
  border: 1px solid #e4e4e7;
  padding: 32px 28px;
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: #18181b;
  margin-bottom: 4px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 14px;
  font-weight: 500;
  color: #52525b;
`;

export const Input = styled.input`
  padding: 10px 12px;
  border: 1px solid #e4e4e7;
  border-radius: 8px;
  font-size: 14px;
  font-family: inherit;
  background: #fff;
  color: #18181b;
  outline: none;
  transition: border-color 0.15s;

  &::placeholder { color: #a1a1aa; }

  &:focus {
    border-color: ${(p) => p.accent || '#5B8BF4'};
  }
`;

export const Button = styled.button`
  padding: 11px 20px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  font-family: inherit;
  background: ${(p) => p.mode || '#5B8BF4'};
  color: #fff;
  cursor: pointer;
  transition: opacity 0.15s;

  &:hover:not(:disabled) { opacity: 0.88; }
  &:disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }
`;
