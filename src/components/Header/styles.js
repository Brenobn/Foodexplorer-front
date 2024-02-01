import styled from "styled-components";

export const Container = styled.header`
  height: 11.4rem;

  display: flex;
  justify-content: center;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
`;

export const LogoContainer = styled.div`
  display: flex;
  width: 37.2rem;
  height: 3.4rem;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;

  margin: 5.6rem 2.8rem 2.4rem 2.8rem;

  > svg {
    color: ${({ theme }) => theme.COLORS.SIMPLE_WHITE};
  }
`;

export const Logo = styled.div`
  display: flex;
  height: 2.6rem;
  justify-content: center;
  align-items: center;
`;

export const LogoText = styled.h1`
  color: ${({ theme }) => theme.COLORS.SIMPLE_WHITE};
  font-family: 'Roboto', sans-serif;
  font-size: 2.2rem;
  font-weight: 700;

  width: 27.8rem;
  display: flex;
  justify-content: center;
  gap: 0.8rem;
`;