import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 4.8rem;

  display: flex;
  padding: 1.2rem 2.4rem;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  border: 0;
  border-radius: 0.5rem;
  font-weight: 500;
  font-size: 1.4rem;
  font-family: "Poppins", sans-serif;
  margin-top: 1.6rem;

  background-color: ${({ theme }) => theme.COLORS.RED};
  color: ${({ theme }) => theme.COLORS.SIMPLE_WHITE};

  &:disabled {
    opacity: 0.5;
  }
`;