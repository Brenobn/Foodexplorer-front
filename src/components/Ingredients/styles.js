import styled from "styled-components";

export const Container = styled.div`
  display: inline-flex;
  padding: 0.4rem 0.8rem;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  border-radius: 0.5rem;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
`;

export const IngredientsName = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.COLORS.WHITE};

`;